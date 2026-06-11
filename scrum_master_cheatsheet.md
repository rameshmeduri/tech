# 🏉 Scrum Master Cheat Sheet

---

## 1. Scrum in a Nutshell

> **Scrum** is an Agile framework for delivering value incrementally through short, time-boxed iterations called **Sprints**, guided by transparency, inspection, and adaptation.

### Three Pillars of Scrum (TIA)
| Pillar | Meaning |
|--------|---------|
| **Transparency** | Work and progress are visible to everyone |
| **Inspection** | Regularly review artifacts and progress |
| **Adaptation** | Adjust based on what inspection reveals |

### Five Scrum Values
`Commitment · Courage · Focus · Openness · Respect`

---

## 2. Scrum Team Roles

| Role | Responsibilities |
|------|----------------|
| **Scrum Master** | Facilitates Scrum events, removes impediments, coaches team and org on Scrum |
| **Product Owner** | Owns the Product Backlog, defines priorities, represents stakeholders |
| **Developers** | Self-organising team that builds the product increment each sprint |

> **Team size:** 3–9 Developers (excluding SM and PO)

---

## 3. Scrum Events (Ceremonies)

| Event | Time-box | Who Attends | Purpose |
|-------|----------|-------------|---------|
| **Sprint** | 1–4 weeks | Full team | Container for all other events; delivers one Increment |
| **Sprint Planning** | Max 8 hrs (4-wk sprint) | Full team | Define Sprint Goal; select and plan backlog items |
| **Daily Scrum** | 15 minutes | Developers | Inspect progress toward Sprint Goal; replan the day |
| **Sprint Review** | Max 4 hrs | Team + stakeholders | Demo Increment; gather feedback; update backlog |
| **Retrospective** | Max 3 hrs | Full team | Inspect team process; create improvement action items |
| **Backlog Refinement** | ~10% of sprint | Team + PO | Estimate, split, and clarify upcoming backlog items |

---

## 4. Scrum Artifacts

| Artifact | Commitment | Description |
|----------|-----------|-------------|
| **Product Backlog** | Product Goal | Ordered list of all work needed for the product |
| **Sprint Backlog** | Sprint Goal | Sprint Goal + selected items + delivery plan |
| **Increment** | Definition of Done | Sum of all completed PBIs; must be usable |

---

## 5. Daily Scrum — 3 Questions

1. **What did I do yesterday** that helped the team meet the Sprint Goal?
2. **What will I do today** to help the team meet the Sprint Goal?
3. **Are there any impediments** blocking me or the team?

> Keep it to **15 minutes**. Detailed discussions happen *after* the standup.

---

## 6. Sprint Planning Inputs & Outputs

### Inputs
- Product Backlog (refined and estimated)
- Team velocity from previous sprints
- Team capacity for the sprint
- Definition of Done

### Outputs
- **Sprint Goal** — the "why" of the sprint
- **Sprint Backlog** — selected PBIs and tasks
- **Delivery plan** — how the team will achieve the goal

---

## 7. Definition of Done (DoD) vs. Acceptance Criteria

| | Definition of Done | Acceptance Criteria |
|---|---|---|
| **Scope** | Applies to every increment | Specific to one user story |
| **Set by** | Scrum Team (+ org standards) | Product Owner |
| **Purpose** | Ensures releasable quality | Confirms story is built correctly |
| **Example** | Code reviewed, tested, deployed to staging | "User can reset password via email link" |

---

## 8. User Story Format & INVEST

### Format
```
As a [type of user],
I want [some goal],
So that [some reason / benefit].
```

### INVEST Criteria
| Letter | Meaning |
|--------|---------|
| **I** | Independent — can be developed in any order |
| **N** | Negotiable — details can be discussed |
| **V** | Valuable — delivers value to the user/business |
| **E** | Estimable — team can size it |
| **S** | Small — fits within a sprint |
| **T** | Testable — has clear acceptance criteria |

---

## 9. Estimation Techniques

| Technique | How It Works |
|-----------|-------------|
| **Story Points** | Relative sizing using Fibonacci (1, 2, 3, 5, 8, 13, 21…) |
| **Planning Poker** | Team members simultaneously reveal estimates; discuss outliers |
| **T-Shirt Sizing** | XS / S / M / L / XL — quick rough sizing |
| **Bucket System** | Place stories into pre-set buckets rapidly |
| **Affinity Mapping** | Group similar-sized stories together visually |

> **Velocity** = Average story points completed per sprint (used for forecasting)

---

## 10. Backlog Prioritisation Techniques

| Technique | Description |
|-----------|------------|
| **MoSCoW** | Must have / Should have / Could have / Won't have |
| **WSJF** | Weighted Shortest Job First — `(CoD + ToD + RR + OE) / Job Size` |
| **Kano Model** | Basic needs, performance features, delighters |
| **Value vs. Effort matrix** | 2×2 grid: Quick wins → Big bets → Fill-ins → Money pits |
| **Stack ranking** | PO simply orders items 1–N by business value |

---

## 11. Impediment Removal — SM Toolkit

```
Impediment identified
       ↓
Can team resolve it themselves?
  YES → Coach team to self-organise
  NO  ↓
Is it within the team's control?
  YES → Help remove it directly
  NO  ↓
Escalate to management / org level
       ↓
Track to resolution in impediment log
```

---

## 12. Sprint Retrospective Formats

| Format | Description |
|--------|------------|
| **Start / Stop / Continue** | What should we start, stop, or keep doing? |
| **4Ls** | Liked · Learned · Lacked · Longed for |
| **Mad / Sad / Glad** | Emotional reflection on the sprint |
| **Sailboat** | Wind (helps) · Anchors (slows) · Rocks (risks) · Sun (goal) |
| **5 Whys** | Drill into a problem's root cause iteratively |
| **KALM** | Keep · Add · Less · More |

---

## 13. Scrum Master Anti-Patterns to Avoid

| Anti-Pattern | Why It's Harmful |
|--------------|----------------|
| Command-and-control facilitation | Undermines team self-organisation |
| Being a task master / PM hybrid | SM is a servant-leader, not a boss |
| Skipping retrospectives | Team loses continuous improvement opportunity |
| Accepting "no impediments" at face value | Hidden blockers slow the team silently |
| Shielding team from all stakeholders | Team needs context to make good decisions |
| Never pushing back on the PO | Unsustainable pace and scope creep |
| Becoming a permanent fixture | Goal is to make yourself less needed over time |

---

## 14. Scrum Master Servant-Leadership Compass

```
         COACH
     (grow the team)
           │
  FACILITATE ──── TEACH
(neutral process)  (Scrum knowledge)
           │
        REMOVE
    (clear obstacles)
```

---

## 15. Key Scrum Metrics

| Metric | Description |
|--------|------------|
| **Velocity** | Story points completed per sprint |
| **Sprint Burndown** | Remaining work vs. time within a sprint |
| **Release Burnup** | Completed work toward a release goal over time |
| **Cumulative Flow Diagram** | WIP, bottlenecks, and throughput over time |
| **Cycle Time** | Time from work start to delivery |
| **Lead Time** | Time from request to delivery |
| **Escaped Defects** | Bugs found in production after release |
| **Team Happiness** | Qualitative health check (e.g. mood chart) |

---

## 16. Key Scrum Abbreviations

| Abbrev. | Full Form |
|---------|----------|
| SM | Scrum Master |
| PO | Product Owner |
| PBI | Product Backlog Item |
| DoD | Definition of Done |
| DoR | Definition of Ready |
| WIP | Work in Progress |
| MVP | Minimum Viable Product |
| MBI | Minimum Business Increment |
| WSJF | Weighted Shortest Job First |
| CFD | Cumulative Flow Diagram |
| TDD | Test-Driven Development |
| BDD | Behaviour-Driven Development |
| CI/CD | Continuous Integration / Continuous Delivery |

---

*Scrum Master Cheat Sheet — based on the Scrum Guide 2020 and Agile best practices*
