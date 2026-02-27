
# Project Context & Constraints

*Run `/init` to populate this file with project-specific details*

---

## 📋 HOW TO USE THIS FILE

### For AI
- **Read**: At session start to understand project specifics
- **Reference**: When making technology or architecture decisions
- **Update**: When stack changes or new constraints are added

### For Humans
- Keep this file up-to-date as single source of truth
- Review before major decisions or architecture changes
- Use as onboarding document for new team members

---

## 1️⃣ PROJECT IDENTITY

### Basic Information
- **Name**: BP LABO
- **Code Name**: bp-labo
- **Version**: 0.0.0 (Frontend), 1.0.0 (Backend)
- **Status**: Development

### Goal & Vision
- **Primary Goal**: Manage ALT (Assistant Language Teacher) operations, including timesheets, scheduling, attendance, and reporting.
- **Target Users**: ALTs, Admins, School Staff.
- **Success Metrics**: Reliable attendance tracking, seamless scheduling, and accurate automated reporting.

### Timeline
- **Start Date**: [YYYY-MM-DD]
- **MVP Target**: [YYYY-MM-DD]
- **Launch Date**: [YYYY-MM-DD]
- **Current Sprint**: [Sprint Number/Name]

---

## 2️⃣ TECHNOLOGY STACK

### Frontend
- **Framework**: Vite + React 19
- **Language**: JavaScript (JSX)
- **Styling**: Tailwind CSS v4, PostCSS
- **State Management**: React Context, React Hooks
- **UI Library**: React Icons, Gantt Task React, React Big Calendar, Recharts, React Toastify, React Dropzone
- **Routing**: React Router DOM v7
- **HTTP Client**: Axios
- **Utils**: date-fns, socket.io-client, xlsx, jspdf

### Backend
- **Runtime**: Node.js
- **Framework**: Express
- **Language**: JavaScript
- **API Type**: REST
- **Real-time**: Socket.io

### Database
- **Primary DB**: MySQL
- **ORM**: Sequelize
- **Secondary/Dev DB**: SQLite (available in deps, likely for local dev/testing)

### Infrastructure
- **Hosting**: CoreServer (v2011.coreserver.jp)
- **Deployment**: SSH + PM2 (Process Manager)
- **CI/CD**: Manual SSH / Script-based
- **Monitoring**: PM2 Logs (`pm2 logs`), Service Status (`pm2 list`)

### Authentication
- **Provider**: Custom (JWT), Google OAuth (for integration)
- **Method**: JWT, Session

### External Services
- **Google Cloud**: Text-to-Speech, Generative AI (Gemini)
- **Email**: Nodemailer (Gmail API)
- **Push Notifications**: web-push
- **Storage**: local `uploads` directory (implied by `express.static`)

---

## 3️⃣ ARCHITECTURE PATTERNS

### Application Architecture
- **Pattern**: Monolithic Repository with separated Frontend/Backend
- **Folder Structure**:
    - `frontend/`: Vite + React SPA
    - `backend/`: Express API Server

### Code Organization
```
project-root/
├── frontend/
│   ├── src/
│   │   ├── components/   # UI Components
│   │   ├── pages/        # Route Pages
│   │   ├── context/      # React Context
│   │   └── ...
│   ├── vite.config.js
│   └── tailwind.config.js
├── backend/
│   ├── routes/           # API Routes
│   ├── models/           # Sequelize Models
│   ├── jobs/             # Cron Jobs & Schedulers
│   ├── middleware/       # Auth & Error Middleware
│   └── server.js         # Entry Point
├── .agent/               # AI Agent Rules & Context
└── ...
```

### Design Patterns Used
- [x] MVC (Model-View-Controller) adapted for API (Routes/Controllers/Models)
- [x] Scheduler/Job Queue (Cron jobs for attendance, emails)
- [ ] Repository Pattern
- [ ] Factory Pattern

### Hub vs App Architecture (Critical)
- **Root (`/`)**: Serves `index.html` (Static "Hub Page").
  - **Purpose**: Marketing, landing, and navigation to other tools.
  - **Source**: `project-root/index.html`
- **App (`/app/`)**: Serves `frontend/dist/index.html` (React SPA).
  - **Purpose**: Main Dashboard (Admin, ALT, etc.).
  - **Source**: `frontend/`
  - **Config**: `basename="/app"` in Router, `base: '/app/'` in Vite.
**IMPORTANT**: Do not deploy React App to root. Root must remain separate.

---

## 4️⃣ CONSTRAINTS & REQUIREMENTS

### Technical Constraints
- **Base URL**: Frontend is served at `/app/` (configured in `vite.config.js`)
- **Backend Port**: 3001
- **CORS**: Configured to allow `bplabo.jp`, `localhost:5173`, `localhost:8080`
- **Rate Limiting**: Applied on Auth and Admin routes

### Business Constraints
- **Budget**: [Development budget if relevant]
- **Team Size**: [Number of developers]
- **Compliance**: [GDPR, HIPAA, SOC2, etc.]

### Security Requirements
- [x] JWT Authentication
- [x] Rate Limiting
- [x] Helmet (Security Headers)
- [ ] OWASP Top 10 compliance
- [ ] Regular security audits

---

## 1️⃣1️⃣ DEPLOYMENT & OPERATIONS

### Deployment Commands (CoreServer)
- **SSH Login**: `ssh bplabo@bplabo.v2011.coreserver.jp`
- **Restart Backend**: `ssh bplabo@bplabo.v2011.coreserver.jp "cd public_html/backend && pm2 restart bplabo-api"`
- **View Logs**: `pm2 logs bplabo-api` (after SSH login)
- **Check Status**: `pm2 list`

### Deployment Checklist
- **Formatter**: [Prettier, ESLint]
- **Linting**: ESLint (Flat Config)
- **Naming Convention**: camelCase (JS), PascalCase (React Components)

### Git Workflow
- **Branch Strategy**: [Git Flow, GitHub Flow]
- **Commit Convention**: [Conventional Commits]

### Documentation
- **README**: Root `README.md` exists

---

## 6️⃣ ENVIRONMENT CONFIGURATION

### Environments
1. **Development**
   - Frontend URL: `http://localhost:5173/app/`
   - Backend URL: `http://localhost:3001`
   - Database: MySQL (Local)

2. **Production**
   - Frontend URL: `https://bplabo.jp/app/`
   - Backend URL: `https://bplabo.jp`

### Environment Variables
```bash
# General
NODE_ENV=development # or production
PORT=3001
FRONTEND_URL=

# Database
DATABASE_URL=
DB_HOST=127.0.0.1
DB_PORT=3306
DB_NAME=bplabo_cdsc1
DB_USER=
DB_PASS=

# Authentication
JWT_SECRET=
NEXTAUTH_SECRET= # If used
NEXTAUTH_URL=

# Email (Nodemailer)
EMAIL_HOST=mail.bplabo.jp
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=register@bplabo.jp
EMAIL_PASS=

# External Services
GOOGLE_APPLICATION_CREDENTIALS=
STRIPE_SECRET_KEY=
SENDGRID_API_KEY= # If used
GOOGLE_MAPS_API_KEY=
```

---

## 7️⃣ DEPENDENCIES & VERSIONS

### Core Dependencies
```json
{
  "vite": "^7.2.4",
  "react": "^19.2.0",
  "express": "^4.18.2",
  "sequelize": "^6.33.0",
  "mysql2": "^3.16.2",
  "tailwindcss": "^4.1.18",
  "socket.io": "^4.8.3"
}
```

### Version Policy
- **Node.js**: [18.x LTS recommended]

---

## 8️⃣ KNOWN ISSUES & LIMITATIONS

### Current Limitations
1. **[Issue]**: [Description]

### Technical Debt
1. **[Debt Item]**: [Description]

---

## 9️⃣ INTEGRATION POINTS

### External APIs
| Service | Purpose | Rate Limit | Docs |
|---------|---------|------------|------|
| Google TTS | Text-to-Speech | - | Google Cloud |
| Google Generative AI | AI Analytics | - | Gemini API |

### Background Jobs
| Job | Schedule | Purpose |
|-----|----------|---------|
| Attendance Report | Scheduled | Generate/Send reports |
| Monthly Review | Scheduled | Analyze monthly data |
| Email Scheduler | Polling | Check/Send emails |
| Visa Scheduler | Scheduled | Check visa expirations |
| Attendance Monitor | Scheduled | Monitor daily attendance |

---

## 🔟 TEAM & CONTACTS

### Team Structure
- **Product Owner**: [Name]
- **Tech Lead**: [Name]
- **Frontend**: [Names]
- **Backend**: [Names]

---

## 📊 METADATA

**Last Updated**: 2026-02-17
**Updated By**: Antigravity
**Review Frequency**: Monthly
