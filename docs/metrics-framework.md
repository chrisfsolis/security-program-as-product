# Security Metrics Framework

## Design Principles
- Balance operational, control, and governance indicators.
- Focus on trends and actionability, not vanity metrics.
- Tie each metric to an owner, target, and decision use-case.

## Metric Catalog

| Metric | Definition | Formula | Target | Owner | Reporting Cadence |
|---|---|---|---|---|---|
| MTTD | Mean time to detect a security event | Avg(detection_time - event_start_time) | <= 30 min | SecOps Manager | Weekly/Monthly |
| MTTR | Mean time to respond/remediate | Avg(remediation_complete - detection_time) | <= 24 hrs (P1) | SecOps + Eng Mgmt | Weekly/Monthly |
| Critical vulnerability aging | Age profile of open critical findings | Median days open + % >30 days | <= 10 day median; <10% >30d | Vulnerability Lead | Weekly |
| Control pass/fail rate | Validation outcome for controls tested | Pass controls / total tested | >= 90% pass | GRC Lead | Monthly |
| Control coverage % | % of in-scope controls instrumented and tested | Tested controls / in-scope controls | >= 85% | GRC + Security Eng | Monthly |
| Alert volume by severity | Alert counts split by severity level | Count alerts by sev (Critical/High/Med/Low) | Stable, with high-fidelity trend | SecOps Manager | Weekly |
| SLA compliance | % of tickets resolved within SLA | Tickets within SLA / total due | >= 90% | Security TPM | Weekly/Monthly |
| Risk reduction trend | Composite risk posture over time | Weighted open risk score trend | Downward quarter-over-quarter | Security TPM + CISO Staff | Monthly/Quarterly |

## Metric Interpretation Guide
- **MTTD rising + alert volume stable:** detection pipeline or triage bottleneck.
- **MTTR rising + SLA down:** remediation capacity/ownership issue.
- **Control pass rate down + coverage up:** expected during expansion; focus on failure closure velocity.
- **Risk reduction flat:** reprioritize backlog to higher-impact features.

## Data Quality Controls
- Timestamp normalization to UTC
- Asset criticality tagging completeness checks
- Duplicate alert suppression logic
- Monthly metric definition review with SecOps, GRC, and BI
