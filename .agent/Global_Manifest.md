---
trigger: on_demand
---

# Global Project Manifest

*Source of Truth for active files, tasks, and system state*

---

## 📋 MANIFEST PURPOSE

This file tracks:
- Active tasks and their status
- System files and their roles
- Execution tools and scripts
- Recent changes and updates
- File dependencies

**Update Frequency**: After every significant change
**Read By**: AI at session start, humans for status checks

---

## 🗂️ SYSTEM FILES (READ ONLY)

*Core files that define how the system works*

| File | Purpose | Last Updated |
|:-----|:--------|:-------------|
| `GEMINI.md` | Master AI behavior rules | [YYYY-MM-DD] |
| `ARCHITECTURE.md` | System structure & agent map | [YYYY-MM-DD] |
| `.agent/rules/lessons_learned.md` | Compounding project memory | [YYYY-MM-DD] |
| `.agent/rules/project_context.md` | Project-specific details | [YYYY-MM-DD] |
| `Global_Manifest.md` | This file - active state tracker | 2026-02-25 |

### Agent Files (20 Total)
| Agent | Role | Last Used |
|:------|:-----|:----------|
| `orchestrator.md` | Multi-agent coordination | [Date] |
| `project-planner.md` | Discovery & planning | [Date] |
| `frontend-specialist.md` | Web UI/UX | 2026-02-19 |
| `backend-specialist.md` | API & business logic | [Date] |
| `mobile-developer.md` | Mobile apps | [Date] |
| `database-architect.md` | Database design | [Date] |
| `security-auditor.md` | Security compliance | [Date] |
| `test-engineer.md` | Testing strategies | [Date] |
| `debugger.md` | Root cause analysis | [Date] |
| `performance-optimizer.md` | Speed & Web Vitals | [Date] |
| *[Others as needed]* | | |

### Skill Files (37 Total - Top Used)
| Skill | Domain | Usage Count |
|:------|:-------|:------------|
| `ui-ux-pro-max` | UI/UX Design Intelligence | 1 |
| `doom-fire-effect` | Visual FX (Canvas) | 2 |
| `clean-code` | Universal coding standards | [Count] |
| `frontend-design` | UI/UX patterns | [Count] |
| `api-patterns` | REST/GraphQL/tRPC | [Count] |
| `testing-patterns` | Test strategies | [Count] |
| `database-design` | Schema design | [Count] |
| *[Others tracked as used]* | | |

---

## 📝 ACTIVE DIRECTIVES (TASK TRACKING)

*Current and recent tasks - organized by status*

### In Progress

| Created | Task Name | Type | Agent(s) | Status | Progress |
|:--------|:----------|:-----|:---------|:-------|:---------|
| 2026-02-20 | Integrate UI-UX Pro Max Skill | Skill | Orchestrator | 🟢 Completed | 100% |
| 2026-02-20 | Dispatch Knowledge Update | Content | BE Specialist | 🟢 Completed | 100% |

### Completed (Last 10)

| Completed | Task Name | Type | Agent(s) | Notes |
|:----------|:----------|:-----|:---------|:------|
| 2026-02-25 | Avatar Fallback Implementation | Bugfix | Orchestrator/FE | Implemented `getAvatarUrl` global utility to handle legacy links and broken images; enforced `alt_avatar_00.png` fallback. |
| 2026-02-25 | ALT Profile Refinement | Feature | Orchestrator/FE | Added avatar grid selector, 15-char nickname limit, and zoomed preview to profile edit modal. |
| 2026-02-25 | Google Favicon SEO Fix | Fix | FE Specialist | Updated `index.html` with proper link tags and manifest for better favicon visibility in search results. |
| 2026-02-25 | ALT Blog Implementation | Feature | Orchestrator/FE/BE | Enabled ALTs to read news posts and comments; added `AltNewsView` and `NewsDetailView`. |
| 2026-02-20 | UI-UX Pro Max Skill Integration | Feature | Orchestrator | Integrated advanced UI/UX intelligence skill from GitHub, including design token scripts and multi-platform templates. |
| 2026-02-20 | Admin Account Status Implementation | Feature | Orchestrator/FE/BE | Added interactive status toggles with blur confirmation modal; backend prevents admin deactivation and secures logins. |
| 2026-02-20 | ALT Guide AI Chat Implementation | Feature | Orchestrator/FE/BE | Created Gemini-powered ALT guide with daily limits, admin settings, and persistent chat history. |
| 2026-02-20 | Dispatch Guide Knowledge Update | Content | BE Specialist | Integrated 2025 Labor Law from NotebookLM and local files into `dispatchGuide.js` and deployed to production. |
| 2026-02-19 | NotebookLM MCP Integration | Feature | Orchestrator | Installed, configured, and authenticated NotebookLM MCP server. Found 18 notebooks. |
| 2026-02-19 | ALT Dashboard Fire Integration | Feature | FE Specialist | Added fire to Late/Absent cards on ALT Dashboard. |
| YYYY-MM-DD | [Task Name] | [Type] | [Agent] | [Brief note] |

### Blocked/Paused

| Created | Task Name | Type | Blocked By | Unblock Condition |
|:--------|:----------|:-----|:-----------|:------------------|
| YYYY-MM-DD | [Task Name] | [Type] | [Reason] | [What's needed] |

### Directive Files Location
- **Path**: `.agent/directives/`
- **Naming**: `{task-slug}.md` (e.g., `user-auth-flow.md`)
- **Archive**: Completed directives moved to `.agent/directives/archive/`

---

## 🛠️ EXECUTION TOOLS & SCRIPTS

*Available scripts organized by category*

### Master Validation Scripts
| Script | Purpose | Location | Last Run |
|:-------|:--------|:---------|:---------|
| `checklist.py` | Priority-based validation | `.agent/scripts/` | [Date] |
| `verify_all.py` | Comprehensive pre-deploy check | `.agent/scripts/` | [Date] |

### Skill-Level Scripts (Most Used)

#### Security
| Script | Skill | Purpose | Last Run |
|:-------|:------|:--------|:---------|
| `security_scan.py` | vulnerability-scanner | OWASP scan | [Date] |
| `dependency_analyzer.py` | vulnerability-scanner | Check dependencies | [Date] |

#### Code Quality
| Script | Skill | Purpose | Last Run |
|:-------|:------|:--------|:---------|
| `lint_runner.py` | lint-and-validate | Lint & type check | [Date] |
| `test_runner.py` | testing-patterns | Run test suite | [Date] |

#### Database
| Script | Skill | Purpose | Last Run |
|:-------|:------|:--------|:---------|
| `schema_validator.py` | database-design | Validate DB schema | [Date] |

#### Frontend
| Script | Skill | Purpose | Last Run |
|:-------|:------|:--------|:---------|
| `ux_audit.py` | frontend-design | UX audit | [Date] |
| `accessibility_checker.py` | frontend-design | A11y check | [Date] |

#### Performance
| Script | Skill | Purpose | Last Run |
|:-------|:------|:--------|:---------|
| `lighthouse_audit.py` | performance-profiling | Core Web Vitals | [Date] |
| `bundle_analyzer.py` | performance-profiling | Bundle size | [Date] |

#### E2E Testing
| Script | Skill | Purpose | Last Run |
|:-------|:------|:--------|:---------|
| `playwright_runner.py` | webapp-testing | E2E tests | [Date] |

#### SEO
| Script | Skill | Purpose | Last Run |
|:-------|:------|:--------|:---------|
| `seo_checker.py` | seo-fundamentals | SEO audit | [Date] |

### Legacy Scripts (Backward Compatibility)
| Script | Location | Status | Replacement |
|:-------|:---------|:-------|:------------|
| `verify_browser.py` | `execution/` | ✅ Still Valid | Now in skill scripts too |

---

## 📊 PROJECT METRICS

### Code Statistics
- **Total Lines of Code**: [Count]
- **Test Coverage**: [Percentage]
- **Technical Debt**: [Days/Hours]
- **Code Quality Score**: [A-F]

### Performance Metrics
- **Lighthouse Score**: [Score]
- **Bundle Size**: [KB]
- **LCP**: [Seconds]
- **FID**: [ms]
- **CLS**: [Score]

### Verification Status
| Check | Last Run | Status | Issues |
|:------|:---------|:-------|:-------|
| Security Scan | [Date] | ✅ Pass | 0 |
| Linting | [Date] | ✅ Pass | 0 |
| Unit Tests | [Date] | ✅ Pass | 0 |
| E2E Tests | [Date] | 🟡 Partial | 2 |
| Accessibility | [Date] | ✅ Pass | 0 |
| SEO | [Date] | ✅ Pass | 0 |

---

## 🔗 FILE DEPENDENCIES

*Critical relationships between files*

### High-Impact Files
*Changes to these files affect many other files*

| File | Affects | Last Modified |
|:-----|:--------|:--------------|
| `schema.prisma` | All DB queries, migrations, types | [Date] |
| `tailwind.config.js` | All styled components | [Date] |
| `tsconfig.json` | All TypeScript files | [Date] |
| `.env` | All environment configs | [Date] |

### Dependency Chains
*When changing X, also check Y*

```
schema.prisma
  └─> prisma/migrations/*.sql
      └─> src/lib/db.ts
          └─> src/app/api/**/*.ts

tailwind.config.js
  └─> src/styles/globals.css
      └─> All components using Tailwind

next.config.js
  └─> Build process
      └─> Deployment configuration
```

---

## 🔄 RECENT CHANGES LOG

*Last 10 significant changes*

### [2026-02-25] - Bugfix / UX
 - **What**: Global Avatar Fallback Implementation
 - **Why**: Fix broken image links in production caused by legacy `localhost` URLs or missing files. Ensure visual consistency.
 - **Files Added**: `frontend/src/utils/avatarHelper.js`
 - **Files Modified**: `Sidebar.jsx`, `ProfileMenu.jsx`, `AltSearchDropdown.jsx`, `AltProfileDisplay.jsx`, `TaskCard.jsx`, `TaskDetailModal.jsx`, `TaskCommentThread.jsx`, `CreateTaskModal.jsx`, `EditAITaskModal.jsx`, `CommentSection.jsx`
 - **Impact**: All avatars across the application now safely fall back to `alt_avatar_00.png` if the source is broken or missing.
 - **Migration Needed**: None.

### [2026-02-25] - Feature / UX
 - **What**: ALT Profile Refinement & Avatar Selector
 - **Why**: Improve the ALT profile editing experience with predefined choices and accurate visual feedback.
 - **Files Modified**: `ProfileEditModal.jsx`, `AuthContext.jsx`, `AltProfile.jsx`
 - **Impact**: ALTs can now choose from 55 predefined avatars, see a zoomed preview, and change their nickname (max 15 chars) with live dashboard updates.
 - **Migration Needed**: None.

### [2026-02-25] - Fix / SEO
 - **What**: Google Favicon & Tab Title Fix
 - **Why**: Favicon not appearing in Google Search results and tab title was set to "frontend".
 - **Files Modified**: `frontend/index.html`
 - **Impact**: Improved SEO visibility and proper branding on browser tabs.
 - **Migration Needed**: Manual upload of `index.html` to server root if not done via build pipeline.

### [2026-02-25] - Feature / Integration
 - **What**: ALT Blog (Latest BP News) Implementation
 - **Why**: Allow ALTs to access company news and engage with comments.
 - **Files Added**: `AltNewsView.jsx`, `NewsDetailView.jsx`
 - **Files Modified**: `App.jsx`, `AltDashboard.jsx`, `Sidebar.jsx`, `backend/routes/blog.js`
 - **Impact**: ALTs have a dedicated news feed in their dashboard.
 - **Migration Needed**: Backend route update on live server.

### [2026-02-20] - Feature / Infrastructure
 - **What**: UI-UX Pro Max Skill Integration
 - **Why**: Add advanced UI/UX design capabilities, including automated design system generation and multi-platform styling.
 - **Files Added**: `.agent/skills/ui-ux-pro-max/` (SKILL.md, scripts/, resources/)
 - **Impact**: Agent can now generate premium, consistent UI designs across Next.js, React, Swift UI, and more.
 - **Migration Needed**: None.

### [2026-02-20] - Feature / Security
 - **What**: Admin Account Status Toggle
 - **Why**: Allow administrators to disable user accounts securely, preventing login and immediately invalidating access while protecting admin accounts.
 - **Files Modified**: `backend/routes/auth.js`, `backend/routes/admin.js`, `frontend/src/pages/admin/AccountManagement.jsx`, `frontend/src/components/Admin/StatusConfirmationModal.jsx`
 - **Impact**: Interactive status UI in Admin panel; robust login rejection for disabled accounts.
 - **Migration Needed**: None. Applied backend route updates to live server.

### [2026-02-20] - Feature / Integration
 - **What**: ALT Guide AI Chat Registration
 - **Why**: Provide ALTs with an interactive, Gemini-powered assistant loaded with official Brain Power rules.
 - **Files Modified**: `altGuide.js`, `admin.js`, `AIChatMessage.js`, `SystemSetting.js`, `ALTGuide.jsx`, `AccountManagement.jsx`
 - **Impact**: ALTs can query rules with persistent history and daily limits managed by Admins.
 - **Migration Needed**: Yes. Executed `scripts/sync_db.js` on live server to create `ai_chat_messages` and `system_settings` tables.

### [2026-02-20] - Content / Knowledge Update
 - **What**: Dispatch Guide Knowledge Base Refactor (2025 Edition)
 - **Why**: Update AI knowledge with specific 2025 Japanese Labor Law and Brain Power dispatch procedures.
 - **Files Modified**: `backend/routes/dispatchGuide.js`, `deploy_knowledge.ps1`
 - **Impact**: AI Dispatch Guide now provides accurate counsel on 3-year rules, cooling-off periods, and 2025 childcare mandates.
 - **Migration Needed**: None. Deployed via `deploy_knowledge.ps1`.

### [2026-02-19] - Feature / Integration
 - **What**: NotebookLM MCP Server Setup
 - **Why**: Provide AI with access to external knowledge bases and notebooks.
 - **Files Modified**: `mcp_config.json`, `auth.json` (auto-gen), `.agent/Global_Manifest.md`
 - **Impact**: Antigravity can now list, query, and manage NotebookLM notebooks and sources.
 - **Migration Needed**: Requires Google account cookies via `notebooklm-mcp-auth --file`.

### [2026-02-19] - Feature / Infrastructure
 - **What**: NotebookLM MCP Server Installed
 - **Why**: Access NotebookLM data directly within the IDE.
 - **Files Modified**: `mcp_config.json`
 - **Impact**: Enabled `notebooklm-mcp-server` for notebook retrieval.
 - **Migration Needed**: None (Auth token generated locally).

### [2026-02-19] - Feature / UX
 - **What**: Doom Fire Effect Integration
 - **Why**: Visual urgency for "Late" and "Absent" statistics on Dashboards.
 - **Files Modified**: `FireAnimation.jsx`, `StatsOverview.jsx`, `AltDashboard.jsx`, `.agent/skills/doom-fire-effect/`
 - **Impact**: Adds canvas-based fire effect to Admin and ALT dashboards. 
 - **Migration Needed**: None.

### [2026-02-17] - Feature Enhancement
 - **What**: Admin Dropdown & Avatar Loading Fix
 - **Why**: Improve assignee management UX and ensure visual consistency (avatars).
 - **Files Modified**: `admin.js` (BE), `CreateTaskModal.jsx`, `EditAITaskModal.jsx`
 - **Impact**: Multiselect-checkbox list for admins; robust avatar pathing.
 - **Migration Needed**: No DB schema change, but BE route update required on server.
 
 ### [2026-02-17] - Feature Enhancement
- **What**: Enhanced AI Task Suggestions (UI/UX + Backend)
- **Why**: Improve usability and provide actionable data (draft replies, schedule changes)
- **Files Modified**: `gmailService.js`, `AITask.js`, `AITasksView.jsx`, `EditAITaskModal.jsx`
- **Impact**: Backend stores email bodies & draft replies; Frontend displays them.
- **Migration Needed**: Yes - Added `draftReply` column to `ai_tasks`

### [2026-02-17] - Technical Debt / Bug Fix
- **What**: Time Off & Schedule Change Notifications + Routing
- **Why**: Fix missing browser notifications for ALTs, broken email links, and missing make-up emails.
- **Files Modified**: `NotificationService.js`, `mailer.js`, `rescheduleRequests.js`, `routes/timeoff.js`, `App.jsx`
- **Impact**: ALTs now receive robust browser/email notifications for all schedule changes/approvals. Dashboard links work.
- **Migration Needed**: No DB change, but Frontend Rebuild was required for routing fixes.
 
 ### [2026-02-18] - Critical Fix / Architecture
- **What**: Fixed White Screen on Root & Restored Hub Page
- **Why**: React App was loading at `/` (white screen due to basename mismatch). Restored usage of separate `index.html` for Hub.
- **Files Modified**: `index.html` (Production Hub), `vite.config.js` (Verified), `main.jsx` (Verified)
- **Impact**: `bplabo.jp` loads Hub; `bplabo.jp/app/` loads Dashboard.
- **Migration Needed**: Manual upload of `index-production.html` -> `index.html` to server root.

### [2026-02-18] - UI/UX Consistency & Feature
- **What**: Time Off Status Fixes & Admin Make-Up Column
- **Why**: Mismatch between Admin/ALT views on request status; missing make-up date info for Admins.
- **Files Modified**: `timeoff.js` (BE), `TimeOffAdmin.jsx`, `TimeOff.jsx` (ALT logic)
- **Impact**: Statuses now consistent (yellow Pending, green Approved); Make-up dates visible to Admins.
- **Migration Needed**: No DB change. Backend file upload (`timeoff.js`) & Frontend build required.

### [2026-02-18] - Bug Fix / Logic Refinement
- **What**: 'On My Way' Reminder Logic & Schedule
- **Why**: Reminders were sending to users without contracts and at incorrect time (8:30 AM).
- **Files Modified**: `backend/utils/cron.js`
- **Impact**: Strict filtering implemented (Active Contract + Scheduled Work Day only). Schedule moved to 08:00 AM.
- **Migration Needed**: No DB change. Upload `cron.js` and restart backend process (`bplabo-backend` or `bplabo-api`).

---

## 🚨 CRITICAL ALERTS

*Important notices or breaking changes*

### Active Alerts
| Priority | Alert | Action Required | Deadline |
|:---------|:------|:----------------|:---------|
| 🔴 High | [Alert description] | [What to do] | [Date] |
| 🟡 Medium | [Alert description] | [What to do] | [Date] |

### Resolved Alerts (Last 5)
| Resolved | Alert | Resolution |
|:---------|:------|:-----------|
| YYYY-MM-DD | [Alert] | [How it was fixed] |

---

## 📅 MAINTENANCE SCHEDULE

### Regular Tasks
| Task | Frequency | Last Done | Next Due |
|:-----|:----------|:----------|:---------|
| Dependency Updates | Weekly | [Date] | [Date] |
| Security Audit | Monthly | [Date] | [Date] |
| Performance Review | Monthly | [Date] | [Date] |
| Database Optimization | Quarterly | [Date] | [Date] |
| Documentation Review | Monthly | [Date] | [Date] |

### Upcoming Deadlines
| Task | Due Date | Owner | Status |
|:-----|:---------|:------|:-------|
| [Task] | [Date] | [Name] | [Status] |

---

## 🎯 CURRENT SPRINT/CYCLE

### Sprint Information
- **Sprint Number**: [Number]
- **Start Date**: [YYYY-MM-DD]
- **End Date**: [YYYY-MM-DD]
- **Goal**: [Sprint goal]

### Sprint Backlog
| Priority | Task | Story Points | Status |
|:---------|:-----|:-------------|:-------|
| P0 | [Task] | [Points] | [Status] |
| P1 | [Task] | [Points] | [Status] |

### Velocity Tracking
- **Planned Points**: [Number]
- **Completed Points**: [Number]
- **Carry Over**: [Number]

---

## 🔍 QUICK LOOKUP

### Find By Agent
| Need | Agent | Command |
|:-----|:------|:--------|
| Plan feature | `project-planner` | `/plan` |
| Build UI | `frontend-specialist` | `/create` |
| Write API | `backend-specialist` | `/create` |
| Fix bug | `debugger` | `/debug` |
| Verify code | `test-engineer` | `/test` |

### Find By File Type
| File Type | Location | Count |
|:----------|:---------|:------|
| Directives | `.agent/directives/` | [Count] |
| Scripts | `.agent/scripts/`, `.agent/skills/*/scripts/` | [Count] |
| Agents | `.agent/agents/` | 20 |
| Skills | `.agent/skills/` | 36 |
| Workflows | `.agent/workflows/` | 12 |

---

## 📚 DOCUMENTATION INDEX

### Internal Docs
| Document | Purpose | Location |
|:---------|:--------|:---------|
| Architecture Diagrams | System design | [Link/Path] |
| API Documentation | API reference | [Link/Path] |
| Component Storybook | UI components | [Link/Path] |
| Database Schema | ERD & table docs | [Link/Path] |

### External Resources
| Resource | Purpose | URL |
|:---------|:--------|:----|
| Framework Docs | [Framework] | [URL] |
| Design System | Brand guidelines | [URL] |
| User Guides | End-user docs | [URL] |

---

## 🔐 ACCESS & CREDENTIALS

### Environment Access
| Environment | URL | Who Has Access |
|:------------|:----|:---------------|
| Development | localhost:3000 | All developers |
| Staging | [URL] | Dev team + QA |
| Production | [URL] | Tech lead + DevOps |

### Service Dashboards
| Service | Purpose | URL |
|:--------|:--------|:----|
| [Service] | [Purpose] | [Dashboard URL] |

*Note: Actual credentials are in environment variables and secret management*

---

## ⚙️ CONFIGURATION FILES

### Critical Config Files
| File | Purpose | Last Modified |
|:-----|:--------|:--------------|
| `package.json` | Dependencies & scripts | [Date] |
| `tsconfig.json` | TypeScript config | [Date] |
| `next.config.js` | Next.js config | [Date] |
| `tailwind.config.js` | Tailwind setup | [Date] |
| `.eslintrc.js` | Linting rules | [Date] |
| `.prettierrc` | Code formatting | [Date] |
| `prisma/schema.prisma` | Database schema | [Date] |
| `docker-compose.yml` | Local services | [Date] |

---

## 📈 ANALYTICS & INSIGHTS

### Usage Patterns
| Pattern | Frequency | Optimization Opportunity |
|:--------|:----------|:------------------------|
| Most used agent | [Agent] | [Suggestion] |
| Most edited files | [Files] | [Suggestion] |
| Common error types | [Type] | [Prevention] |

### AI Performance
| Metric | Value | Trend |
|:-------|:------|:------|
| Tasks completed | [Count] | ↗️ |
| Average task time | [Duration] | ↘️ |
| Error rate | [Percentage] | ↘️ |
| Lessons logged | [Count] | ↗️ |

---

## 🔄 SYSTEM HEALTH

### Component Status
| Component | Status | Issues | Last Check |
|:----------|:-------|:-------|:-----------|
| Build System | ✅ Healthy | 0 | [Date] |
| Test Suite | ✅ Healthy | 0 | [Date] |
| Linting | ✅ Healthy | 0 | [Date] |
| Type Checking | ✅ Healthy | 0 | [Date] |
| Database | ✅ Healthy | 0 | [Date] |
| CI/CD | ✅ Healthy | 0 | [Date] |

### Legend
- ✅ Healthy: All checks passing
- 🟡 Warning: Minor issues, still functional
- 🔴 Critical: Major issues, needs immediate attention
- ⚪ Unknown: Not checked recently

---

## 📝 METADATA

**Last Updated**: 2026-02-25 15:25
**Updated By**: Antigravity AI
**Auto-Update Enabled**: Yes
**Backup Location**: [Path if applicable]

---

## 💡 USAGE TIPS

### For Developers
- Check this file at start of day for current state
- Update task status as you work
- Log blockers immediately
- Review dependencies before major changes

### For AI
- Read at session start to understand current state
- Update task progress after each directive completion
- Log all script executions with dates
- Track file modifications in Recent Changes

### For Project Managers
- Review sprint progress section
- Check alerts and blockers
- Monitor velocity trends
- Plan next sprint based on current metrics

---

**Remember**: This file is the single source of truth for project state. Keep it accurate and up-to-date.

---

**Template Version**: 2.0
**Compatible With**: Antigravity IDE 2.0+
