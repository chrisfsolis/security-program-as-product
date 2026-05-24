# Security Program Operating Console

A lightweight internal product prototype for managing security program demand, roadmap priorities, adoption status, risk/compliance tradeoffs, and executive decision support.

## Problem this prototype solves
Security programs often receive demand from many stakeholders without a shared operating system for intake, prioritization, adoption follow-through, and executive decisions. This prototype demonstrates a practical model to run security work like a product.

## Target users
- Security Product Manager
- Security Technical Program Manager
- Security Program Manager
- CISO / Security Leadership
- GRC Lead
- Security Engineering Lead
- SecOps Lead
- Platform Engineering Partner
- Executive Stakeholder

## Prototype capabilities
- Executive summary cards for attention management
- Stakeholder intake workflow table
- Backlog scoring with RICE plus risk/compliance/adoption/urgency modifiers
- Roadmap phases with dependencies, risks, and exit criteria
- Adoption tracker to show shipped vs actually used
- Risk and decision log
- Control/evidence traceability view
- Client-side priority filter for backlog triage

## Run locally
```bash
cd dashboard
npm install
npm run dev
```

## Build
```bash
cd dashboard
npm run build
```

## Repository structure
- `dashboard/` React + Vite TypeScript UI prototype
- `product-requirements.md` PRD for MVP scope
- `data-model.md` fictional data entities and fields
- `operating-cadence.md` weekly/monthly/quarterly program cadence
- `backlog/` epics, user stories, and prioritization matrix
- `docs/` roadmap, metrics framework, and risk register

## Demo data disclaimer
All records in this repository are fictional and demo-safe. This is a portfolio prototype for operating model illustration only; it is not connected to real enterprise systems, production data, or customer environments.

## How to evaluate this prototype
Review whether a PM can quickly answer: what needs attention, what should be prioritized next, where adoption is lagging, and which decisions require executive input.
