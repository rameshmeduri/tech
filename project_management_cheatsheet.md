# 📋 Project Management Cheat Sheet

---

## 1. Project Lifecycle

| Phase | Key Activities |
|-------|---------------|
| **Initiate** | Project charter, stakeholder identification, feasibility study |
| **Plan** | Scope, schedule, budget, risk plan, resource plan |
| **Execute** | Task execution, team management, deliverable production |
| **Monitor & Control** | KPI tracking, change control, issue management |
| **Close** | Stakeholder sign-off, lessons learned, project archive |

---

## 2. Methodologies at a Glance

### Waterfall
- Sequential, phase-by-phase approach
- Fixed scope defined upfront
- Heavy documentation
- Best for: stable, well-defined projects (construction, compliance)

### Agile / Scrum
- Iterative 2–4 week sprints
- Daily standups, sprint reviews, retrospectives
- Adaptive to changing requirements
- Best for: software, product development

### Kanban
- Visual board with columns (To Do → In Progress → Done)
- WIP (Work in Progress) limits
- Continuous delivery, no fixed iterations
- Best for: ongoing support, operations

### PRINCE2
- Process-driven, heavily structured
- 7 Principles, 7 Themes, 7 Processes
- Best for: large government/enterprise projects

---

## 3. Triple Constraint (Iron Triangle)

```
        Scope
       /     \
      /       \
   Time ——— Cost
```

> **Change one — the others must shift.**
> Quality sits at the centre as the balancing factor.

---

## 4. SMART Goals

| Letter | Meaning | Question to Ask |
|--------|---------|----------------|
| **S** | Specific | What exactly needs to be done? |
| **M** | Measurable | How will success be measured? |
| **A** | Achievable | Is it realistic with available resources? |
| **R** | Relevant | Does it align with business objectives? |
| **T** | Time-bound | What is the deadline? |

---

## 5. Earned Value Management (EVM)

### Key Metrics

| Metric | Abbreviation | Meaning |
|--------|-------------|---------|
| Planned Value | PV (BCWS) | Budgeted cost of work scheduled |
| Earned Value | EV (BCWP) | Budgeted cost of work performed |
| Actual Cost | AC (ACWP) | Actual cost of work performed |
| Budget at Completion | BAC | Total approved project budget |

### Key Formulas

| KPI | Formula | Interpretation |
|-----|---------|---------------|
| Schedule Variance | `SV = EV - PV` | > 0 = ahead of schedule |
| Cost Variance | `CV = EV - AC` | > 0 = under budget |
| Schedule Perf. Index | `SPI = EV / PV` | > 1 = ahead of schedule |
| Cost Perf. Index | `CPI = EV / AC` | > 1 = under budget |
| Estimate at Completion | `EAC = BAC / CPI` | Forecasted total cost |
| Estimate to Complete | `ETC = EAC - AC` | Remaining cost to finish |
| Variance at Completion | `VAC = BAC - EAC` | Expected over/under budget |
| To-Complete Perf. Index | `TCPI = (BAC-EV)/(BAC-AC)` | Efficiency needed to meet BAC |

---

## 6. Risk Management

### Risk Matrix

| Probability ↓ / Impact → | Low | Medium | High | Critical |
|--------------------------|-----|--------|------|----------|
| **High** | Medium | High | Critical | Critical |
| **Medium** | Low | Medium | High | Critical |
| **Low** | Low | Low | Medium | High |

### Risk Response Strategies

| Strategy | When to Use |
|----------|------------|
| **Avoid** | Eliminate the cause; change the plan |
| **Mitigate** | Reduce probability or impact |
| **Transfer** | Insurance, outsourcing, contracts |
| **Accept** | Low priority; add to risk register |
| **Escalate** | Beyond project manager's authority |

---

## 7. RACI Chart

| Role | Definition |
|------|-----------|
| **R — Responsible** | Person(s) who do the work |
| **A — Accountable** | Single owner who signs off; the buck stops here |
| **C — Consulted** | Subject matter experts; two-way communication |
| **I — Informed** | Kept updated on progress; one-way communication |

> **Rule:** Every task must have exactly **one A**. Multiple R's are fine.

---

## 8. Work Breakdown Structure (WBS)

```
Project
├── Phase 1
│   ├── Deliverable 1.1
│   │   ├── Task 1.1.1
│   │   └── Task 1.1.2
│   └── Deliverable 1.2
└── Phase 2
    ├── Deliverable 2.1
    └── Deliverable 2.2
```

- Break work down to **work packages** (lowest level)
- Each level = ~8–80 hours of effort
- 100% rule: WBS captures **all** project work

---

## 9. Critical Path Method (CPM)

| Term | Definition |
|------|-----------|
| **Critical Path** | Longest path through the network; determines project duration |
| **Float / Slack** | How long a task can be delayed without delaying the project |
| **Early Start (ES)** | Earliest a task can begin |
| **Late Finish (LF)** | Latest a task can finish without delay |
| **Float formula** | `Float = LF - EF = LS - ES` |

---

## 10. Common PM Tools & Techniques

| Tool | Purpose |
|------|---------|
| **Gantt Chart** | Visual timeline of tasks and dependencies |
| **Kanban Board** | Visual workflow management |
| **PERT Chart** | Network diagram for task sequencing |
| **Burndown Chart** | Tracks remaining work vs. time (Agile) |
| **Stakeholder Map** | Power/Interest grid for stakeholder analysis |
| **Issue Log** | Track, assign, and resolve issues |
| **Risk Register** | Document and manage identified risks |
| **Milestone Chart** | High-level project checkpoints |
| **Communication Plan** | Who gets what info, how often, and how |

---

## 11. Change Control Process

1. **Submit** — Raise a formal Change Request (CR)
2. **Assess** — Analyse impact on scope, time, cost & quality
3. **Review** — Change Control Board (CCB) evaluates the CR
4. **Decide** — Approve, reject, or defer
5. **Update** — Revise project plan and baselines
6. **Communicate** — Notify all stakeholders
7. **Implement** — Execute the change
8. **Monitor** — Track the change to closure

---

## 12. Stakeholder Analysis (Power/Interest Grid)

```
High Power │  MANAGE CLOSELY  │  KEEP SATISFIED  │
           ├──────────────────┼──────────────────┤
Low Power  │  MONITOR         │  KEEP INFORMED   │
           └──────────────────┴──────────────────┘
               Low Interest       High Interest
```

---

## 13. Key PM Abbreviations

| Abbrev. | Full Form |
|---------|----------|
| PM | Project Manager |
| PMO | Project Management Office |
| WBS | Work Breakdown Structure |
| CPM | Critical Path Method |
| EVM | Earned Value Management |
| CCB | Change Control Board |
| CR | Change Request |
| KPI | Key Performance Indicator |
| SPI | Schedule Performance Index |
| CPI | Cost Performance Index |
| BAC | Budget at Completion |
| EAC | Estimate at Completion |
| SOW | Statement of Work |
| RAM | Responsibility Assignment Matrix |
| OBS | Organizational Breakdown Structure |

---

*Project Management Cheat Sheet — covers PMBOK fundamentals, Agile, EVM, Risk, and Change Control*
