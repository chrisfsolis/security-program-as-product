# Security Program Risk Register

## Risk Scale
- **Impact:** Low / Medium / High / Critical
- **Likelihood:** Low / Medium / High
- **Status:** Open / Mitigating / Accepted / Closed

| Risk ID | Risk | Impact | Likelihood | Owner | Mitigation Plan | Status |
|---|---|---|---|---|---|---|
| R-001 | Alert fatigue reduces analyst ability to triage true positives | High | High | SecOps Manager | Implement severity tuning, suppression rules, and queue SLAs; add analyst capacity planning | Mitigating |
| R-002 | Incomplete asset inventory causes blind spots in monitoring and scanning | Critical | Medium | Cloud Platform Lead | Reconcile CMDB and cloud inventory weekly; enforce tagging policy in CI/CD guardrails | Open |
| R-003 | Delayed vulnerability remediation for critical assets increases exposure window | High | High | Engineering Director | Introduce risk-based prioritization, remediation SLAs, and executive escalation path | Mitigating |
| R-004 | Lack of ownership for control failures leads to repeat audit findings | High | Medium | GRC Lead | Assign named control owners, enforce failure ticketing workflow, and monthly control review | Open |
| R-005 | Inconsistent reporting across teams causes misaligned executive decisions | Medium | Medium | Security TPM | Standardize KPI definitions, automate report generation, and publish single source of truth dashboard | Mitigating |
| R-006 | Integration delays between tools impact roadmap milestones | Medium | Medium | Security Engineering Lead | Define interface contracts, stage integrations by dependency, reserve buffer capacity | Open |
| R-007 | Incident response runbooks are outdated for cloud-native attack paths | High | Medium | IR Lead | Quarterly tabletop exercises, runbook versioning, post-incident updates | Mitigating |
