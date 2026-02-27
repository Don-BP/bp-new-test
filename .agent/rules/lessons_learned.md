---
trigger: always_on
---

# Compounding Project Memory

*SYSTEM INSTRUCTION: Read at session start. Write here after every fixed error.*

---

## 📋 How to Use This File

### For AI
- **Read**: At the start of every session
- **Write**: After fixing any error or discovering any quirk
- **Apply**: Use these lessons to prevent repeating mistakes

### For Humans
- Review weekly to spot patterns
- Add manual discoveries
- Archive old entries when no longer relevant

---

## 1️⃣ TECHNICAL GOTCHAS

*Language/framework specific issues that aren't obvious*

### JavaScript/TypeScript
- **Relative Path Pitfalls**: Do not use raw relative paths (e.g., `assets/img.png`) for static assets if the app uses deep routing or subdirectory hosting (like `/app/`). Prepend `/` or use a normalization helper to ensure paths are domain-absolute.
- **Null-String Guarding**: Be wary of literal strings like `"null"` or `"undefined"` coming from the database. A simple `attr || fallback` check will fail because the string `"null"` is truthy. Use a robust helper for sensitive values like `avatarUrl`.
- [Example]: Do not use `time.sleep()`; use `await asyncio.sleep()`.
- [Example]: Async functions need `await` - missing it causes silent failures.

### Python
- [Example]: Always use `--break-system-packages` flag with pip in containerized environments.

### React/Next.js
- [Example]: `useEffect` with empty dependency array runs once, not on every render.

### Database
- [Example]: Prisma migrations need manual review before production - auto-generated can miss edge cases.
- **Schema Mismatches**: Silent API failures (pending state) often indicate missing DB columns on live server. Always verify schema.
- **Sequelize Strict Filtering**: When filtering parent records (Users) based on child criteria (Contracts), always use `required: true` in the `include` option. Otherwise, it performs a `LEFT OUTER JOIN` and returns users even if the child condition fails (returning null for the child). `required: true` forces an `INNER JOIN`.
- **Python Script Path on Windows**: `pip install` on Windows often places executables in `AppData\Local\Programs\Python\Python312\Scripts`, which may not be in the system PATH. Always verify executable location if command is not found after install.

---

## 2️⃣ ENVIRONMENT SPECIFICS

*Platform, IDE, or deployment environment quirks*

### Antigravity IDE
- **Playwright**: Ensure `playwright install` is run before using verification scripts.
- **Path Handling**: Always use absolute paths from project root.

### Google Cloud Platform
- [Example]: Cloud Run needs explicit port configuration in Dockerfile.

### Vercel
- [Example]: Environment variables must be set in dashboard AND .env.local.

### Docker
- [Example]: Volume mounts need correct permissions - use `chown` in Dockerfile.

---

## 3️⃣ RESOLVED BUGS LOG

*Specific issues encountered and how they were fixed*

### Format
```
### [YYYY-MM-DD]: [Short Description]
- **Context:** What were we trying to do?
- **Error:** What went wrong? (include error message)
- **Root Cause:** Why did it fail?
- **Fix:** How we solved it (include code/command)
- **Prevention:** How to avoid in future
```

### Example Entries

### [2026-02-17]: Empty Admin Dropdown (API Schema Mismatch)
- **Context:** Implementing admin selection dropdown in task modals.
- **Error:** Dropdown was empty despite 3+ admins existing in DB.
- **Root Cause:** The `/admin/users` endpoint was missing the `isActive` attribute in its `findAll` query. The frontend filtered for `isActive === true`, excluding all users.
- **Fix:** Added `isActive`, `nickname`, and `employeeId` to the backend routes in `admin.js`.
- **Prevention:** Always verify that API endpoints return all attributes required for frontend filtering logic.

### [2026-02-25]: Global Avatar Fallback & getAvatarUrl
- **Context:** Resolving broken avatars across the dashboard due to legacy URLs (localhost) or missing assets.
- **Error:** 404/Connection Refused in console; UI showed empty icons or broken image tags.
- **Root Cause:** Inconsistent avatar handling across 10+ components. Old database records pointed to dev environments or local files that don't exist in production.
- **Fix:** Implemented `getAvatarUrl` in `utils/avatarHelper.js`. It parses the URL, strips local dev hostnames, handles `"null"` strings, and forces a fallback to `alt_avatar_00.png` or a UI avatar if anything fails.
- **Prevention:** Always use `getAvatarUrl` for ANY user/ALT avatar rendering. Avoid raw `user.avatarUrl` in components.

### [2026-02-17]: Infinite Loading State on Frontend
- **Context:** Deploying AITasksView.jsx to live server
- **Error:** AI Suggestions tab stuck on "Loading..."
- **Root Cause:** `fetchTasks` function was accidentally deleted during an edit, but `useEffect` still called it.
- **Fix:** Restored missing function definitions.
- **Prevention:** Verify all functions used in `useEffect` are defined.

### [2026-02-17]: Silent API Failure (Missing Column)
- **Context:** Added `draftReply` to AITask model
- **Error:** Frontend hung on loading; Backend query failed silently or returned bad data.
- **Root Cause:** Live database missing `draftReply` column (Code vs DB mismatch).
- **Fix:** Ran `add_draft_reply_to_ai_tasks.js` migration script.
- **Prevention:** Always include DB migration/verification in deployment checklist.

### [2025-02-15]: Playwright Timeout on CI
- **Context:** E2E tests passing locally but failing in CI
- **Error:** `TimeoutError: page.goto: Timeout 30000ms exceeded`
- **Root Cause:** CI environment slower, default timeout too short
- **Fix:** Increased timeout to 60000ms for CI: `page.goto(url, {timeout: 60000})`
- **Prevention:** Use environment-specific timeout configs

### [2025-02-10]: TypeScript Build Fails After Dependency Update
- **Context:** Updated `@types/node` to latest version
- **Error:** `TS2307: Cannot find module 'fs' or its corresponding type declarations`
- **Root Cause:** Breaking change in type definitions
- **Fix:** Pinned `@types/node` to `^18.0.0` in package.json
- **Prevention:** Check changelog before updating type packages

### [2026-02-18]: White Screen on Root (Router Basename Mismatch)
- **Context:** User accessing `https://bplabo.jp/` expecting Hub Page.
- **Error:** White screen with console error: `<Router basename="/app"> is not able to match the URL "/"`.
- **Root Cause:** React App (Dashboard) was incorrectly served at root instead of `/app/`, but configured for `/app/`. Also, duplicate `index.html` usage caused collisions between the Hub and the App.
- **Fix:** Restored separate `index.html` for Hub Page at root; kept React App in `/app/`. Updated Hub Page links to use relative `/app/` paths and attached tokens via JS.
- **Prevention (CRITICAL RULE):** NEVER overwrite the root `bplabo.jp/index.html` with the React App build! The Marketing/Hub site lives at the root. The React App MUST ALWAYS live strictly inside the `/app/` subdirectory. Always ensure frontend builds are copied to `public_html/app/` on the live server and NEVER to `public_html/`.

### [2026-02-20]: Incorrect App Entry / Login URL Assumption
- **Context:** Automated browser testing attempted to log into the frontend React app.
- **Error:** 404 or page not found errors when trying to navigate directly to `/app/login` or similar React routes.
- **Root Cause:** Failed to recognize that the main site architecture completely separates the authentication hub from the React application build.
- **Fix:** Access the correct root HTML files.
- **Prevention (CRITICAL RULE):** The main entry page for the live site is ALWAYS `bplabo.jp/index.html`. Login is handled at `bplabo.jp/login.html`. The React App (`/app/*`) is ONLY launched from these root pages after authentication. Do not assume the React directory contains the login pages.

---

## 4️⃣ PERFORMANCE LEARNINGS

*Optimization discoveries and benchmarks*

### General
- [Example]: Lazy loading reduced initial bundle size by 40%.

### Images
- [Example]: WebP format with `<picture>` fallback improved LCP by 1.2s.

### Database
- [Example]: Adding index on `user_id` column reduced query time from 800ms to 12ms.

- **Prevention**: Include DB migrations in checklist.

### [2026-02-18]: Sequelize Foreign Key Error (Empty String)
- **Context**: Updating `CalendarEntry` with `schoolId` during Time Off approval/reschedule.
- **Error**: `SequelizeForeignKeyConstraintError: Cannot add or update a child row...`
- **Root Cause**: Backend saved empty string `""` into `schoolId` (Int/FK), which MySQL rejects.
- **Fix**: Sanitized input: `schoolId: makeupInfo.schoolId || null`.
- **Prevention**: Sanitize optional Foreign Key fields to `null` if falsy.

### [2026-02-18]: UI Status Discrepancy (Backend Normalization)
- **Context**: ALT Dashboard showed "Pending" for approved requests.
- **Error**: Backend returned raw statuses like `off`, Frontend only knew `approved`.
- **Root Cause**: Inconsistent status vocabulary.
- **Fix**: Normalized statuses in API: `off/absent/makeup` -> `approved`.
- **Prevention**: Normalize data at API edge to match View Model.

### [2026-02-18]: 'On My Way' Reminders Sent to Inactive/Off Users
- **Context**: Daily cron job for check-in reminders.
- **Error**: Emails sent to users with expired contracts or "Time Off" status.
- **Root Cause**: Sequelize `User.findAll` used default `LEFT JOIN` for includes. It fetched users even if they had no matching active contract/workday.
- **Fix**: Added `required: true` to `Contract` and `CalendarEntry` includes, plus strict status checks (`scheduled`, `late`, etc.).
- **Prevention**: Use `required: true` for filtering-by-association.

### [2026-02-18]: PM2 Process Name Confusion
- **Context**: Restarting backend after deployment.
- **Error**: `Process or Namespace bplabo-api not found` despite documentation saying `bplabo-api`.
- **Root Cause**: The actual running process was named `bplabo-backend` (id 9).
- **Fix**: Used `pm2 list` to verify running processes, then `pm2 restart bplabo-backend`.
- **Prevention**: Always run `pm2 list` before assuming process names, especially on servers managed by multiple people/scripts.

### [2026-02-19]: NotebookLM MCP - Error 16: Authentication Expired
- **Context:** Verifying user notebooks via NotebookLM MCP server.
- **Error:** `RPC Error 16: Authentication expired`
- **Root Cause:** The Google session cookies provided during initial setup became invalid or expired on the server side.
- **Fix:** Used `notebooklm-mcp-auth --file` with a fresh cookie string exported from Chrome's DevTools.
- **Prevention:** If Error 16 recurs, prompt the user for a fresh cookie export. Note: Account used for cookies does not need to match the IDE account.

### [2026-02-19]: MCP Server Connected but Empty Resources

### [2026-02-20]: Escaped Backticks in Object Literals
- **Context:** Saving `SystemSetting` using Sequelize `findOrCreate`.
- **Error:** `SyntaxError: Invalid or unexpected token` when running `nodemon server.js`.
- **Root Cause:** A template literal inside an object property (`description: \`Setting for \${key}\``) was incorrectly escaped with backslashes during code generation.
- **Fix:** Removed the backslashes so the template literal is valid JS: ``description: `Setting for ${key}` ``.
- **Prevention:** Do not manually escape backticks when writing JavaScript code blocks containing template literals inside object properties unless explicitly required by a string parser.

### [2026-02-20]: Infinite Render Loop on Default Object Props
- **Context:** User navigating from ALT Profile page experienced a freeze/delay (had to press F5).
- **Error:** The UI became unresponsive or locked during route transition due to a background render loop.
- **Root Cause:** `AltProfileDisplay.jsx` defined a default parameter `cityBlockMap = {}`. On re-renders, it created a new object reference, which triggered a `useEffect` dependency, which then updated state with `setAvailableBlocks([])`, triggering another re-render.
- **Fix:** Extracted `[]` and `{}` default values into component-external constants (`EMPTY_ARRAY`, `EMPTY_OBJECT`) to ensure stable references across renders.
- **Prevention:** Do not use inline object or array literals (`{}` or `[]`) as default parameter values if they are used in `useEffect` dependency arrays.

### [2026-02-20]: Missing requireAdmin Middleware Import
- **Context:** Registering new routes in `backend/routes/admin.js`.
- **Error:** `ReferenceError: requireAdmin is not defined`
- **Root Cause:** The `requireAdmin` middleware was used at the top of the router (`router.use(requireAdmin);`) but was never required at the file level.
- **Fix:** Added `const { requireAdmin } = require('../middleware/auth');` to the imports.
- **Prevention:** Always double-check middleware imports when using them in router files.

### [2026-02-25]: Incorrect API Client Import
- **Context:** Building new React components (`AltNewsDetail.jsx`).
- **Error:** Vite build failed: `Could not resolve "../../api/client"`
- **Root Cause:** Deeply nested relative paths were calculated improperly. The component was in `src/pages/`, making the correct climb `../api/client`, not `../../`.
- **Fix:** Corrected relative import paths.
- **Prevention:** Always double-check relative folder depths when importing common utilities like `api/client.js`.

---

## 5️⃣ SECURITY DISCOVERIES

*Security issues found and mitigated*

### Authentication
- [Example]: JWT tokens need shorter expiry (15min) with refresh token rotation.

### Input Validation
- [Example]: Always sanitize user input before SQL queries - found SQL injection vulnerability in search endpoint.

### API Keys
- [Example]: Never commit `.env` files - use `.env.example` template instead.

---

## 6️⃣ UX INSIGHTS

*User experience learnings from testing or feedback*

### Mobile
- [Example]: Touch targets need minimum 44x44px - smaller buttons caused accessibility issues.

### Forms
- [Example]: Inline validation (on blur) better than submit-only validation - reduced error rate by 30%.

### Loading States
- [Example]: Skeleton screens better than spinners for perceived performance.

---

## 7️⃣ WORKFLOW IMPROVEMENTS

*Process or tooling optimizations*

### Development
- [Example]: Running `checklist.py` before commits catches 90% of issues early.

### Deployment
- [Example]: Blue-green deployment reduced downtime from 5min to zero.
- **Migration Scripts**: Always creating a standalone JS migration script (e.g., `add_column.js`) is safer than relying on ORM sync for live DBs.

### Testing
- [Example]: Running unit tests in watch mode during development catches regressions immediately.

---

## 8️⃣ COMMON PATTERNS

*Reusable solutions to recurring problems*

### Hybrid Data Storage
```javascript
// Storing JSON in Text Fields
// Use strict delimiters to separate metadata from content
const data = `AI Analysis: ${JSON.stringify(json)}
Original Content: ${text}`;
// Parse with robust regex + try/catch
```

### Error Handling
```typescript
// Good: Centralized error handling
try {
  await riskyOperation();
} catch (error) {
  logger.error('Operation failed', { error, context });
  throw new AppError('User-friendly message', error);
}
```

### API Response Format
```typescript
// Standard success response
{
  success: true,
  data: { ... },
  meta: { timestamp, requestId }
}

// Standard error response
{
  success: false,
  error: { code, message, details },
  meta: { timestamp, requestId }
}
```

---

## 9️⃣ DEPRECATED PATTERNS

*Old approaches that should no longer be used*

### ❌ Old Way → ✅ New Way

- ❌ `moment.js` → ✅ `date-fns` (smaller bundle size)
- ❌ `componentDidMount` → ✅ `useEffect` hook
- ❌ Manual fetch → ✅ `@tanstack/react-query`
- ❌ CSS-in-JS → ✅ Tailwind CSS (for this project)

---

## 🔟 CHECKLIST FOR ADDING ENTRIES

Before adding a new entry, ask:

- [ ] Is this issue likely to recur?
- [ ] Is the solution non-obvious?
- [ ] Have I included enough context?
- [ ] Is the fix reproducible?
- [ ] Did I categorize it correctly?

If YES to 3+ questions → Add the entry.

---

## 📊 STATISTICS

*Optional: Track patterns over time*

### Most Common Issue Categories
1. [Category]: [Count] issues
2. [Category]: [Count] issues

### Lessons by Agent/Skill
- `frontend-specialist`: [Count] lessons
- `backend-specialist`: [Count] lessons

---

**Remember**: Every error is a learning opportunity. Log it, learn from it, never repeat it.

---

**Last Updated**: 2026-02-25
**Total Lessons**: 18
**Most Recent**: Global Avatar Fallback Fix
