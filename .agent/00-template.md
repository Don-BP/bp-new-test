---
directive_version: 2.0
created: YYYY-MM-DD
status: planning | active | blocked | completed
priority: p0 | p1 | p2 | p3
---

# Directive: [TASK NAME]

*Brief one-line description of what this directive achieves*

---

## 📋 METADATA

- **Created**: [YYYY-MM-DD]
- **Agent(s)**: [Primary agent responsible]
- **Skills Required**: [List of skills needed]
- **Estimated Effort**: [Hours/Days]
- **Actual Effort**: [Hours/Days - update when completed]
- **Status**: [Planning | Active | Blocked | Completed]
- **Priority**: [P0-Critical | P1-High | P2-Medium | P3-Low]

---

## 🎯 1. OBJECTIVE

### Primary Goal
[Specific, measurable goal - what are we trying to achieve?]

### Success Criteria
*What does "done" look like?*

- [ ] [Specific measurable outcome 1]
- [ ] [Specific measurable outcome 2]
- [ ] [Specific measurable outcome 3]

### User Story (if applicable)
**As a** [type of user]
**I want** [goal]
**So that** [benefit]

### Acceptance Criteria
- [ ] Given [context], when [action], then [expected outcome]
- [ ] Given [context], when [action], then [expected outcome]

---

## 📥 2. INPUTS & CONTEXT

### Existing Files
| File | Path | Purpose | Modifications Needed |
|:-----|:-----|:--------|:--------------------|
| [Filename] | [Path] | [Purpose] | [Read only / Modify / None] |

### Dependencies
- **External Libraries**: [List libraries needed]
- **APIs/Services**: [List external services]
- **Database Tables**: [List tables involved]
- **Environment Variables**: [List env vars needed]

### Context & Background
[Provide relevant background information, previous attempts, design decisions, etc.]

### Related Directives
- [ ] `directive-name.md` - [How they relate]

---

## 🧠 3. COGNITIVE PROTOCOL

### Analysis
[Break down the problem. What are the components? What's complex? What's straightforward?]

### Strategy
[Which approach will we take? Why? What are alternatives?]

### Constraints & Risks
[What could go wrong? What are the limitations? What dependencies could break?]

---

## 🛠️ 4. EXECUTION PLAN

### Phase 1: Setup & Preparation
*Tasks to prepare the environment*

- [ ] Install dependencies: `[commands]`
- [ ] Set environment variables
- [ ] Create database migrations (if needed)
- [ ] Review related code

### Phase 2: Implementation

#### Task 2.1: [Subtask Name]
**Agent**: [Which agent handles this]
**Skill(s)**: [Which skills to use]

**Steps**:
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Files to Create/Modify**:
- `path/to/file.ts` - [Purpose]

**Verification**:
- [ ] [How to verify this subtask]

#### Task 2.2: [Subtask Name]
[Same structure as 2.1]

#### Task 2.3: [Subtask Name]
[Same structure as 2.1]

### Phase 3: Testing

#### Unit Tests
- [ ] Test file: `path/to/test.spec.ts`
- [ ] Coverage target: [Percentage]
- [ ] Key scenarios to test:
  - [Scenario 1]
  - [Scenario 2]

#### Integration Tests
- [ ] Test file: `path/to/integration.spec.ts`
- [ ] Test scenarios:
  - [Scenario 1]
  - [Scenario 2]

#### E2E Tests (if applicable)
- [ ] Test file: `e2e/test.spec.ts`
- [ ] User flows to test:
  - [Flow 1]
  - [Flow 2]

### Phase 4: Documentation
- [ ] Update README if needed
- [ ] Add JSDoc/comments
- [ ] Update API documentation
- [ ] Create Storybook story (for UI components)

---

## ⚙️ 5. SCRIPTS & TOOLS

### Tools to Use
| Tool/Script | Purpose | Command |
|:------------|:--------|:--------|
| [Script name] | [Purpose] | `python .agent/skills/{skill}/scripts/{script}.py` |
| [Script name] | [Purpose] | `npm run [command]` |

### Manual Steps
*Steps that can't be automated*

1. [Step 1]
2. [Step 2]

---

## ✅ 6. VERIFICATION (MANDATORY)

### Pre-Commit Checks
```bash
# Run these before considering task complete
python .agent/scripts/checklist.py .
```

**Must Pass:**
- [ ] Linting (no errors)
- [ ] Type checking (no errors)
- [ ] Unit tests (100% pass, [X]% coverage)
- [ ] Integration tests (100% pass)
- [ ] Security scan (no critical issues)

### Feature-Specific Checks
- [ ] [Custom verification 1]
- [ ] [Custom verification 2]
- [ ] Manual testing: [Specific scenarios to test]

### Performance Benchmarks
- [ ] [Metric] < [Threshold] (e.g., Page load < 2s)
- [ ] Bundle size impact < [KB]
- [ ] API response time < [ms]

### Browser Testing (if frontend)
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile responsive

### Accessibility (if frontend)
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast passes WCAG AA
- [ ] ARIA labels present

---

## 🚀 7. DEPLOYMENT

### Pre-Deploy Checklist
```bash
# Full verification suite
python .agent/scripts/verify_all.py . --url http://localhost:3000
```

**Must Pass:**
- [ ] All checklist.py checks
- [ ] Lighthouse score > [Threshold]
- [ ] E2E tests passing
- [ ] No console errors
- [ ] Database migrations tested

### Deployment Steps
1. [Step 1]
2. [Step 2]
3. [Step 3]

### Rollback Plan
**If deployment fails:**
1. [Rollback step 1]
2. [Rollback step 2]

**Rollback command**: `[command if applicable]`

### Post-Deploy Verification
- [ ] Health check endpoint responds
- [ ] Key user flows work in production
- [ ] No spike in error rates
- [ ] Performance metrics stable

---

## 📝 8. SELF-ANNEALING LOG

*Append errors, fixes, and learnings here. Also update `lessons_learned.md`*

### Error Log

#### [YYYY-MM-DD HH:MM] - Error #1
- **Issue**: [Describe what went wrong]
- **Error Message**: 
  ```
  [Paste error message]
  ```
- **Root Cause**: [Why it happened]
- **Fix**: [How it was solved]
- **Prevention**: [How to avoid in future]
- **Added to lessons_learned.md**: [Yes/No]

#### [YYYY-MM-DD HH:MM] - Error #2
[Same structure]

### Insights & Learnings
- [Learning 1]
- [Learning 2]

### Technical Debt Created
- [Debt item 1 - with ticket/issue number if applicable]
- [Debt item 2]

---

## 🔗 9. DEPENDENCIES & IMPACTS

### This Directive Depends On
- [ ] [Other directive or task]
- [ ] [External dependency]

### This Directive Blocks
- [ ] [Task waiting on this]
- [ ] [Feature dependent on this]

### Files Modified
*Auto-populated or manually tracked*

- `path/to/file1.ts` - [Type of change]
- `path/to/file2.ts` - [Type of change]

### Database Changes
- [ ] Schema changes: [Describe]
- [ ] Migration file: `prisma/migrations/[name].sql`
- [ ] Seed data changes: [Describe]
- [ ] Data migration needed: [Yes/No - if yes, describe]

### API Changes
- [ ] New endpoints: [List]
- [ ] Modified endpoints: [List]
- [ ] Breaking changes: [List with migration guide]
- [ ] API version bump needed: [Yes/No]

---

## 📊 10. PROGRESS TRACKING

### Progress
- Overall: [Percentage]%
- Phase 1 (Setup): [Percentage]%
- Phase 2 (Implementation): [Percentage]%
- Phase 3 (Testing): [Percentage]%
- Phase 4 (Documentation): [Percentage]%

### Time Tracking
| Date | Hours | Activity | Notes |
|:-----|:------|:---------|:------|
| YYYY-MM-DD | [Hours] | [Activity] | [Notes] |

### Blockers
| Blocker | Impact | Unblock Condition | Status |
|:--------|:-------|:------------------|:-------|
| [Issue] | [High/Med/Low] | [What's needed] | [Open/Resolved] |

---

## 💭 11. NOTES & DECISIONS

### Design Decisions
| Decision | Rationale | Alternatives Considered | Date |
|:---------|:----------|:-----------------------|:-----|
| [Decision] | [Why] | [What else was considered] | [Date] |

### Open Questions
- [ ] [Question 1] - [Status: Open/Answered]
- [ ] [Question 2] - [Status: Open/Answered]

### Follow-Up Tasks
- [ ] [Task to do after this directive completes]
- [ ] [Future enhancement idea]

---

## 📚 12. REFERENCES

### Documentation
- [Link to related docs]
- [Link to design files]
- [Link to API specs]

### Similar Implementations
- [Link to similar code/feature for reference]

### External Resources
- [Tutorial/guide that helped]
- [Stack Overflow thread]
- [GitHub issue/PR]

---

## ✓ 13. COMPLETION CHECKLIST

### Before Marking as Complete
- [ ] All success criteria met
- [ ] All verification checks passed
- [ ] Tests written and passing
- [ ] Documentation updated
- [ ] Code reviewed (if applicable)
- [ ] Deployed to staging/production
- [ ] Post-deploy verification done
- [ ] Lessons logged in `lessons_learned.md`
- [ ] `Global_Manifest.md` updated
- [ ] This directive archived to `.agent/directives/archive/`

### Sign-Off
- **Completed By**: [AI/Human Name]
- **Completion Date**: [YYYY-MM-DD]
- **Review Notes**: [Any final notes]

---

## 🔄 REVISION HISTORY

| Date | Version | Changes | Author |
|:-----|:--------|:--------|:-------|
| YYYY-MM-DD | 1.0 | Initial creation | [Name] |
| YYYY-MM-DD | 1.1 | [Changes] | [Name] |

---

**Directive Template Version**: 2.0
**Compatible With**: Antigravity IDE 2.0+
**Last Updated**: [YYYY-MM-DD]
