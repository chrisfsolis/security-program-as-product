# Prioritization Matrix (RICE)

## Scoring Model
**RICE Score = (Reach × Impact × Confidence) / Effort**

- **Reach:** Estimated stakeholder/processes affected per quarter
- **Impact:** Relative risk reduction and operational improvement (0.5-3 scale)
- **Confidence:** Data confidence in estimates (0-100%)
- **Effort:** Story points

## Feature Scoring

| Feature | Reach | Impact | Confidence | Effort | RICE Score | Priority Rank |
|---|---:|---:|---:|---:|---:|---:|
| GuardDuty alerting integration | 9 | 2.5 | 0.90 | 8 | 2.53 | 2 |
| OpenVAS vulnerability reporting | 8 | 2.0 | 0.95 | 5 | 3.04 | 1 |
| Control-as-code validation | 7 | 3.0 | 0.75 | 13 | 1.21 | 6 |
| Security control coverage dashboard | 6 | 2.0 | 0.85 | 8 | 1.28 | 5 |
| Incident prioritization engine | 7 | 2.5 | 0.80 | 8 | 1.75 | 3 |
| Executive risk reporting | 10 | 1.5 | 0.90 | 5 | 2.70 | 4 |

## Sequencing Recommendation
1. OpenVAS vulnerability reporting
2. GuardDuty alerting integration
3. Incident prioritization engine
4. Executive risk reporting
5. Security control coverage dashboard
6. Control-as-code validation

## Notes
- Lower-ranked items may still be mandatory due to compliance or audit commitments.
- Re-score quarterly based on incident trends, audit findings, and delivery capacity.
