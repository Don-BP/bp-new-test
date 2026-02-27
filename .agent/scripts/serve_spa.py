
import http.server
import socketserver
import os

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Default behavior first
        try:
            return http.server.SimpleHTTPRequestHandler.do_GET(self)
        except Exception:
            pass

    def send_error(self, code, message=None, explain=None):
        # If 404 and inside the React App path, serve the index.html
        if code == 404:
            path = self.path
            # Check if we are trying to access the BP-Expo App SPA routes
            # We want to match /bp-global-discovery/dist/ANYTHING but NOT files with extensions
            if '/bp-global-discovery/dist/' in path:
                filename = os.path.basename(path)
                # If it looks like a file extension (css, js, png, map, mp3), return 404 truly
                if '.' in filename:
                     return http.server.SimpleHTTPRequestHandler.send_error(self, code, message, explain)
                
                # Otherwise, serve the SPA index.html
                # We need to construct the absolute path to the index.html
                # Current working directory is the project root (thanks to the os.chdir below)
                spa_index_path = os.path.join(os.getcwd(), 'bp-global-discovery', 'dist', 'index.html')
                
                if os.path.exists(spa_index_path):
                    self.send_response(200)
                    self.send_header("Content-Type", "text/html")
                    self.end_headers()
                    with open(spa_index_path, 'rb') as f:
                        self.copyfile(f, self.wfile)
                    return
        
        return http.server.SimpleHTTPRequestHandler.send_error(self, code, message, explain)

# Ensure we are serving from the right root (up 2 levels from .agent/scripts)
os.chdir(os.path.join(DIRECTORY, '..', '..'))
print(f"Serving SPA-enabled server on http://localhost:{PORT} ...")

with socketserver.TCPServer(("", PORT), SPAHandler) as httpd:
    httpd.serve_forever()
