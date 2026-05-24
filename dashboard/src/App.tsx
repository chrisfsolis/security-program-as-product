import { useMemo, useState } from 'react';
import { adoptionItems, backlogItems, controlEvidence, requests, riskDecisions, roadmapPhases } from './data';

export function App() {
  const [priorityFilter, setPriorityFilter] = useState('All');
  const filteredBacklog = useMemo(
    () => backlogItems.filter((item) => priorityFilter === 'All' || item.priorityLabel === priorityFilter),
    [priorityFilter]
  );
  const cards = {
    totalRequests: requests.length,
    p0p1Items: backlogItems.filter((i) => i.priorityLabel === 'P0' || i.priorityLabel === 'P1').length,
    highRiskCompliance: backlogItems.filter((i) => i.riskModifier + i.complianceModifier >= 6).length,
    blocked: backlogItems.filter((i) => i.blocked).length,
    shippedNotAdopted: adoptionItems.filter((i) => ['Not started', 'Needs intervention'].includes(i.adoptionStatus)).length,
    execNeeded: riskDecisions.filter((i) => i.status === 'Decision needed').length,
  };

  return <div className="container">
    <h1>Security Program Operating Console</h1>
    <p className="sub">Fictional demo data only. This prototype shows how a security program can be run as an internal product operating model.</p>
    <section className="cards">{Object.entries({
      'Total stakeholder requests': cards.totalRequests,
      'P0/P1 backlog items': cards.p0p1Items,
      'High risk/compliance-sensitive': cards.highRiskCompliance,
      'Blocked by dependency': cards.blocked,
      'Shipped but not adopted': cards.shippedNotAdopted,
      'Executive decisions needed': cards.execNeeded,
    }).map(([k,v])=><article key={k}><h3>{k}</h3><strong>{v}</strong></article>)}</section>

    <section><h2>Stakeholder Request Intake</h2><Table headers={[ 'Request ID','Title','Stakeholder','Business driver','Risk if ignored','Affected teams','Outcome','Category','Status','PM next action']} rows={requests.map(r=>[r.id,r.title,r.stakeholder,r.businessDriver,r.riskIfIgnored,r.affectedTeams.join(', '),r.requestedOutcome,r.category,r.status,r.pmNextAction])}/></section>

    <section><h2>Backlog Prioritization</h2><p>Adjusted Priority = RICE + Risk + Compliance + Adoption + Executive Urgency. RICE alone can undervalue low-reach but high-risk or audit-sensitive work.</p>
    <label>Filter by priority: <select value={priorityFilter} onChange={e=>setPriorityFilter(e.target.value)}><option>All</option><option>P0</option><option>P1</option><option>P2</option><option>P3</option></select></label>
    <Table headers={['Epic','Capability','Reach','Impact','Confidence','Effort','RICE','Risk','Compliance','Adoption','Exec urgency','Adjusted','Priority','PM recommendation']} rows={filteredBacklog.map(i=>[i.epic,i.capability,i.reach,i.impact,i.confidence,i.effort,i.riceScore,i.riskModifier,i.complianceModifier,i.adoptionModifier,i.executiveUrgencyModifier,i.adjustedPriority,i.priorityLabel,i.pmRecommendation])}/></section>

    <section><h2>Roadmap</h2>{roadmapPhases.map(p=><article className="phase" key={p.phase}><h3>{p.phase}: {p.name}</h3><p><b>Objective:</b> {p.objective}</p><p><b>Key deliverables:</b> {p.deliverables.join(', ')}</p><p><b>Exit criteria:</b> {p.exitCriteria}</p><p><b>Dependencies:</b> {p.dependencies}</p><p><b>Risks:</b> {p.risks}</p><p><b>Adoption signal:</b> {p.adoptionSignal}</p></article>)}</section>

    <section><h2>Adoption Tracker</h2><Table headers={['Capability','Owner','Target users','Adoption status','Metric','Current signal','Friction/blocker','Next PM action']} rows={adoptionItems.map(a=>[a.capability,a.owningTeam,a.targetUsers,a.adoptionStatus,a.adoptionMetric,a.currentAdoptionSignal,a.friction,a.nextPmAction])}/></section>
    <section><h2>Risk and Decision Log</h2><Table headers={['ID','Description','Impact','Likelihood','Owner','Mitigation/Decision needed','Due date','Status']} rows={riskDecisions.map(r=>[r.id,r.description,r.impact,r.likelihood,r.owner,r.action,r.dueDate,r.status])}/></section>
    <section><h2>Control / Evidence Traceability</h2><Table headers={['Control area','Evidence source','Owner','Validation cadence','Current status','Last reviewed','Remediation action']} rows={controlEvidence.map(c=>[c.controlArea,c.evidenceSource,c.owner,c.validationCadence,c.currentStatus,c.lastReviewed,c.remediationAction])}/></section>
  </div>;
}

function Table({ headers, rows }: { headers: string[]; rows: (string | number)[][] }) {
  return <div className="table-wrap"><table><thead><tr>{headers.map((h)=><th key={h}>{h}</th>)}</tr></thead><tbody>{rows.map((r,i)=><tr key={i}>{r.map((c,j)=><td key={j}>{c}</td>)}</tr>)}</tbody></table></div>;
}
