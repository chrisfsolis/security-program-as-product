# Security Program Dashboard Wireframe

## Dashboard Objective
Provide a single executive-to-operational view of security program performance, risk posture, and delivery status.

## Audience Views
1. **Executive View:** Program health, top risks, strategic trend indicators
2. **Program View:** Milestones, backlog delivery, dependency risk
3. **Operational View:** Alert and vulnerability workload, SLA performance, control failures

## Wireframe Layout

### Header
- Reporting period selector (month/quarter)
- Overall program health (RAG)
- Risk reduction index trend sparkline

### Row 1: Outcome KPIs
- MTTD (minutes) + trend
- MTTR (hours) + trend
- Critical vuln aging (% >30 days) + trend
- SLA compliance (%) + trend

### Row 2: Control Governance
- Control pass/fail donut
- Control coverage % gauge
- Open control failures by owner (bar chart)

### Row 3: Threat Operations
- Alert volume by severity (stacked area)
- Incident priority distribution (P1/P2/P3)
- False-positive trend (line)

### Row 4: Delivery and Risk
- Roadmap milestone burndown by phase
- Top 5 program risks (table with status)
- Decisions needed tracker (owner + due date)

## Interaction Design Notes
- Click-through from KPI cards to root-cause detail pages.
- Filters: business unit, cloud account, control domain, severity.
- Annotation markers for major releases/incidents to explain trend shifts.
