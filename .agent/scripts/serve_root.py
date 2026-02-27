import http.server
import socketserver
import os

PORT = 8080
DIRECTORY = "."

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def send_error(self, code, message=None, explain=None):
        if code == 404:
            path = self.path
            
            # Configuration: List of SPA apps [URL_Snippet, Local_Path_To_Dist]
            # Local_Path_To_Dist is relative to os.getcwd() (project root)
            SPA_APPS = [
                ('/bp-global-discovery/dist/', os.path.join('bp-global-discovery', 'dist')),
                ('/bpecho-dev/build/',         os.path.join('bpecho-dev', 'build')),
                ('/bpecho-shout-dev/build/',   os.path.join('bpecho-shout-dev', 'build')),
                ('/bp-tango-dev/build/',       os.path.join('bp-tango-dev', 'build')),
                ('/BP-Planner-dev/dist/',      os.path.join('BP-Planner-dev', 'dist')),
            ]

            for url_snippet, local_dist_path in SPA_APPS:
                if url_snippet in path:
                    filename = os.path.basename(path)
                    dist_root = os.path.join(os.getcwd(), local_dist_path)

                    # CASE 1: It looks like a file extension (.js, .css, .png, etc)
                    if '.' in filename:
                        # Attempt generic smart recovery for assets
                        candidates = [
                            os.path.join(dist_root, filename),            # Direct match
                            os.path.join(dist_root, 'assets', filename),  # Vite standard
                            os.path.join(dist_root, 'static', 'js', filename), # CRA JS
                            os.path.join(dist_root, 'static', 'css', filename), # CRA CSS
                            os.path.join(dist_root, 'static', 'media', filename), # CRA Media
                            os.path.join(dist_root, 'images', filename)   # Images fallback
                        ]
                        
                        for real_path in candidates:
                            if os.path.exists(real_path):
                                self.send_response(200)
                                # Simple MIME type guessing
                                if filename.endswith('.css'): self.send_header("Content-Type", "text/css")
                                elif filename.endswith('.js'): self.send_header("Content-Type", "application/javascript")
                                elif filename.endswith('.png'): self.send_header("Content-Type", "image/png")
                                elif filename.endswith('.jpg'): self.send_header("Content-Type", "image/jpeg")
                                elif filename.endswith('.svg'): self.send_header("Content-Type", "image/svg+xml")
                                self.end_headers()
                                with open(real_path, 'rb') as f:
                                    self.copyfile(f, self.wfile)
                                return

                        # If truly not found, break loop to let default 404 handle it (or continue checking other apps?)
                        # Actually, if matched URL snippet, we should strictly handle it or fail.
                        break
                    
                    # CASE 2: It is a route (no extension), serve index.html
                    spa_index_path = os.path.join(dist_root, 'index.html')
                    if os.path.exists(spa_index_path):
                        self.send_response(200)
                        self.send_header("Content-Type", "text/html")
                        self.end_headers()
                        with open(spa_index_path, 'rb') as f:
                            self.copyfile(f, self.wfile)
                        return

        return http.server.SimpleHTTPRequestHandler.send_error(self, code, message, explain)

print(f"Serving HTTP on http://localhost:{PORT} ...")
print(f"Root directory: {os.path.abspath(DIRECTORY)}")
print(f"SPA Routing Enabled for /bp-global-discovery/dist/")

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server...")
