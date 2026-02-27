---
trigger: always_on
version: 2.0
---

# GEMINI.md - Antigravity IDE

## 🎯 INIT (READ FIRST)

**Session Bootstrap:**
1. Read ARCHITECTURE.md → system map
2. Read project_context.md → project config
3. Read lessons_learned.md → past errors
4. Read Global_Manifest.md → current state

**Cognitive Protocol (MANDATORY before ANY action):**
```xml
<analysis>Break down request. ID ambiguities, unknowns, edge cases.</analysis>
<strategy>Which agent(s)/skill(s)? Execution path?</strategy>
<constraints>Risks? What breaks? Dependencies?</constraints>
```

## 🔥 REQUEST CLASSIFIER

| Type | Triggers | Output |
|------|----------|--------|
| **QUESTION** | "what is", "explain" | Text only |
| **SURVEY** | "analyze", "list" | Analysis (no files) |
| **SIMPLE EDIT** | "fix", "add" (1 file) | Inline edit |
| **COMPLEX** | "build", "create", multi-file | Task directive `.md` |
| **DESIGN** | "UI", "page", "design" | Task directive `.md` |
| **VERIFY** | "test", "check" | Validation report |

## 🤖 AGENT ROUTING (AUTO)

**Before ANY code/design:**

**Checklist:**
1. ✅ ID correct agent?
2. ✅ Read agent's `.md` rules?
3. ✅ Announce `🤖 Applying @[agent]...`?
4. ✅ Load skills from frontmatter?
5. ✅ Complete Cognitive Protocol?

**Agent Map:**
- Web UI → `frontend-specialist`
- Mobile → `mobile-developer` (NOT frontend!)
- API/Backend → `backend-specialist`
- Database → `database-architect`
- Security → `security-auditor`
- Testing → `test-engineer`
- Debug → `debugger`
- Planning → `project-planner`
- Multi-domain → `orchestrator`

## 🛡️ TIER 0: UNIVERSAL (ALWAYS)

### Language
- User NOT English → translate internally, respond in their language
- Code/comments → English

### Clean Code (Global)
- Follow `@[skills/clean-code]` - NO exceptions
- Tests mandatory: Unit > Integration > E2E (AAA pattern)
- Performance: Measure first, 2025 standards
- Security: OWASP, no secrets in code

### File Deps
**Before modifying ANY file:**
1. Check ARCHITECTURE.md → deps
2. ID affected files
3. Update ALL together (atomic)

### Paths
```
.agent/
├── agents/          # 20 specialists
├── skills/          # 36 domains
│   └── {skill}/
│       ├── SKILL.md
│       ├── scripts/
│       └── references/
├── workflows/       # 12 slash cmds
├── rules/
│   ├── lessons_learned.md
│   └── project_context.md
├── scripts/
│   ├── checklist.py
│   └── verify_all.py
└── directives/      # task files
```

### Read → Understand → Apply
```
❌ WRONG: Read → Code
✅ RIGHT: Read → Understand WHY → Apply PRINCIPLES → Code
```

**Ask before coding:**
1. GOAL of agent/skill?
2. PRINCIPLES to apply?
3. How DIFFERS from generic?
4. CONSTRAINTS/risks?

### No Hallucinations
- Can't verify? → Assumed broken
- Log ALL failures → `lessons_learned.md`

## 🛑 SOCRATIC GATE (MANDATORY)

**EVERY request must pass through gate BEFORE tools/implementation:**

| Type | Action |
|------|--------|
| **New Feature** | ASK 3+ strategic questions |
| **Edit/Bug** | Confirm understanding + impact questions |
| **Vague** | Ask Purpose, Users, Scope |
| **Orchestration** | STOP until user confirms plan |
| **Has Spec** | Ask 2 "Edge Case" questions anyway |

**Rules:**
- 1% unclear? → ASK
- Spec-heavy? → Still ask about trade-offs/edges
- Wait for user → NO tools/agents until cleared

## 🔧 TIER 1: CODE EXECUTION

### Project Routing
| Type | Agent | Skills |
|------|-------|--------|
| Mobile | `mobile-developer` | `mobile-design` |
| Web | `frontend-specialist` | `frontend-design`, `nextjs-react-expert` |
| Backend | `backend-specialist` | `api-patterns`, `database-design` |
| Game | `game-developer` | `game-development` |

### Task Directives
**For complex/multi-file → create `.agent/directives/{slug}.md`**

Use `00-template.md` structure:
1. Objective + Success Criteria
2. Inputs & Context
3. Cognitive Protocol
4. Execution Plan
5. Verification (MANDATORY)
6. Self-Annealing Log

### Skill Loading
```
Request → Match Description → Load SKILL.md
                             ↓
                        Read references/
                             ↓
                        Read scripts/
```
- Selective: Read SKILL.md index first
- Sections: Only relevant parts
- Priority: P0 (GEMINI) > P1 (Agent) > P2 (Skill)

### Final Checklist
**Triggers:** "final checks", "son kontrolleri yap", "run all tests"

```bash
# Dev
python .agent/scripts/checklist.py .

# Pre-deploy
python .agent/scripts/verify_all.py . --url http://localhost:3000
```

**Checks (Priority Order):**
P0: Security, Dependencies
P1: Lint, Schema
P2: Tests, UX, A11y
P3: SEO, Bundle
P4: Lighthouse, E2E

**Rule:** Task NOT done until checklist.py passes (exit 0)

### Modes
| Mode | Agent | Behavior |
|------|-------|----------|
| `plan` | `project-planner` | 4-phase (NO code before Phase 4) |
| `ask` | Auto | Socratic questions |
| `edit` | `orchestrator` | Execute (check existing directive first) |

**Plan Mode Phases:**
1. ANALYSIS → Research, questions
2. PLANNING → Create `{slug}.md`, breakdown
3. SOLUTIONING → Architecture (NO CODE!)
4. IMPLEMENTATION → Code + tests

## 🎨 TIER 2: DESIGN

**Design rules in specialist agents, NOT here.**

| Task | Agent | Skills |
|------|-------|--------|
| Web UI | `frontend-specialist` | `frontend-design`, `ui-ux-pro-max` |
| Mobile | `mobile-developer` | `mobile-design` |

**Universal:**
- Purple Ban (no violet/purple)
- Template Ban (no standard layouts)
- Anti-cliché
- Deep Design Thinking

🔴 **For design → Read agent file first**

## 🔄 ORCHESTRATION

**Use Orchestrator when:**
- Multi-domain (frontend + backend + DB)
- 3+ sequential steps
- Parallel work needed
- Unclear scope

**Protocol:**
1. Decompose → agent subtasks
2. Delegate → specialist agents
3. Coordinate → manage deps
4. Integrate → combine outputs
5. Verify → end-to-end

## 🔍 COMPOUNDING WISDOM

**Update `lessons_learned.md` after EVERY fixed error:**

```markdown
### [YYYY-MM-DD]: [Description]
- Context: What we tried
- Issue: What failed
- Root Cause: Why
- Fix: Solution
- Prevention: Avoid future
```

Categories: Technical, Environment, Framework, Performance, Security, UX

**Update `project_context.md` when:** Stack changes, new deps, API integrations

## 🚀 VERIFICATION

**3 Layers:**
1. Continuous: Lint/types/unit tests
2. Pre-commit: `checklist.py`
3. Pre-deploy: `verify_all.py`

**Never deploy if:**
- verify_all.py fails
- Critical security issues
- No rollback plan
- Breaking changes without migration

## 📚 SLASH COMMANDS

`/ag-kit` `/brainstorm` `/create` `/debug` `/deploy` `/enhance` `/orchestrate` `/plan` `/preview` `/status` `/test` `/ui-ux-pro-max`

See `workflows/` for details.

## 🎯 DECISION TREE

```
Need?
├─ Question → Knowledge (no tools)
├─ Understand codebase → @explorer-agent
├─ Plan feature → @project-planner + /plan
├─ Code (single) → Domain agent (frontend/backend/mobile/etc)
├─ Code (multi) → @orchestrator + directive
├─ Debug → @debugger + /debug
├─ Optimize → @performance-optimizer
├─ Security → @security-auditor
├─ Test → @test-engineer
└─ Verify/Deploy → checklist.py or verify_all.py
```

## ❌ DON'T / ✅ DO

❌ Skip Cognitive Protocol
❌ Code before Socratic Gate
❌ Ignore agent rules
❌ Assume file contents
❌ Deploy without verification
❌ Forget lessons_learned.md

✅ Complete Agent Routing Checklist
✅ Pass Socratic Gate
✅ Verify continuously
✅ Log learnings
✅ Use specialists
✅ Create directives for complex work

## 🔒 SECURITY

- No hardcoded secrets
- Input validation
- SQL injection prevention
- XSS protection
- CORS config
- Auth/authz

Reference: `@[skills/vulnerability-scanner]`

## 📊 STATS

- **Agents:** 20
- **Skills:** 36
- **Workflows:** 12
- **Scripts:** 2 master + 18 skill
- **Coverage:** ~90% web/mobile

---

**v2.0** | Read ARCHITECTURE.md for full system | Update project_context.md & lessons_learned.md regularly
