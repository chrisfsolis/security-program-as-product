# Data Model (Fictional)
## StakeholderRequest
- id: unique request ID
- title: short request label
- stakeholder: requesting role
- businessDriver: reason for request
- riskIfIgnored: risk statement
- affectedTeams: impacted groups
- requestedOutcome: desired result
- category: intake category
- status: intake lifecycle state
- pmNextAction: immediate PM action

## BacklogItem
- epic
- capability
- reach
- impact
- confidence
- effort
- riceScore
- riskModifier
- complianceModifier
- adoptionModifier
- executiveUrgencyModifier
- adjustedPriority
- priorityLabel
- pmRecommendation
- blocked

## RoadmapPhase
- phase
- name
- objective
- deliverables
- exitCriteria
- dependencies
- risks
- adoptionSignal

## AdoptionItem
- capability
- owningTeam
- targetUsers
- adoptionStatus
- adoptionMetric
- currentAdoptionSignal
- friction
- nextPmAction

## RiskDecision
- id
- description
- impact
- likelihood
- owner
- action
- dueDate
- status

## ControlEvidence
- controlArea
- evidenceSource
- owner
- validationCadence
- currentStatus
- lastReviewed
- remediationAction
