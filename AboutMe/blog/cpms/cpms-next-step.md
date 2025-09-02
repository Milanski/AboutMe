---
sidebar_position: 4
---

# EV SaaS 12-Month Plan (Side Project)

## Assumptions
- Development effort is **part-time (~10–20h/week)** for the next 12 months.
- Business focus: validation of product-market fit and onboarding first pilot customers.
- The company will not hand over the project for free → we propose a **license/revenue sharing model**.

---

## Strategic Context
- The system has already been **proven in production with 1,500 company charging stations** over several years.
- Core technical features are **already implemented and tested** (reporting, tariffs, dashboards, monitoring).
- Stability and integrations have been validated.
- This makes the system **market-ready** – only business, polishing, and scaling steps are needed.

---

## Phase 1: Foundation (Months 1–3)

### Technical
- Clean up codebase:
  - Remove unused modules, restructure project, update dependencies.
  - Make the system fully runnable (end-to-end flows).
- Integrate new payment provider (Stripe/Adyen/PayPal):
  - Sandbox integration first.
  - Prepare billing APIs and unit tests.

### Business
- Define **tariff model**:
  - **Buildings**: €49–199/month subscription + €0.05 per charging session.
  - **Fleets**: €149–599/month depending on vehicle count + €2–3/vehicle.
- Create landing page + 1-pager product intro.
- Identify 5–10 pilot prospects (buildings, SMEs with EV fleets).

---

## Phase 2: Pilot Preparation (Months 4–6)

### Technical
- Deploy demo system on local server.
- Create demo user flows.
- Simulate charging sessions for demo purposes.

### Business
- Reach out to pilot customers with demo.
- Offer **free 3-month pilot** for early adopters.
- Start collecting feedback on usability, pricing, and reporting needs.

---

## Phase 3: Pilot Execution & Stabilization (Months 7–9)

### Technical
- Since core features are already implemented:
  - **Stabilize**: ensure uptime, monitoring, automated alerts.
  - **Polish UX/UI**: small improvements to dashboard and tariff management.
  - **Documentation**: create admin manual + API documentation.
- Optimize deployment pipeline for easier scaling (CI/CD).

### Business
- Convert **1–2 pilot customers into paying users**.
- Build partnerships with charger installers (offer SaaS as add-on).
- Publish 1 case study on LinkedIn / website.

---

## Phase 4: Growth & Validation (Months 10–12)

### Technical
- Add fleet-specific refinements:
  - Home charging reimbursement (manual upload of kWh & receipts).
  - Export to Excel/CSV for accounting.
- Harden cloud deployment with backups, SLAs, and monitoring.
- Security review and GDPR compliance check.

### Business
- Target **SMEs with 5–20 EVs** for fleet pilots.
- Explore partnerships with **leasing companies** and **EV dealerships**.
- If demand is high:
  - Consider shifting from side project → part-time or full-time focus.
  - Prepare investor pitch deck (for €200k–300k pre-seed).

---

## Licensing Proposal

Since the company invested in developing the software, we propose the following **license model**:

### Option A: Revenue Share (Recommended)
- We operate the system, cover costs, and commercialize it.
- Company receives **15% of net revenues** (after payment provider fees & cloud hosting).
- Agreement duration: **3 years**, then renegotiation.

### Option B: Hybrid Model
- Small upfront license fee (e.g. €10k–20k).
- Plus **10% revenue share** for 3 years.
- After 3 years → buyout option (e.g. €50k or multiple of ARR).

### Option C: Equity Swap
- Instead of revenue share, company gets **5–10% equity** in the new venture.
- Works better if we expect VC funding later.

**Recommendation**: Option A (Revenue Share 15% for 3 years) – simple, fair, low risk.

---

## Cloud Operations Cost Estimate (AWS/Azure)

**Setup**: 5 microservices, medium size (~1 vCPU, 2–4 GB RAM each).  
Target: 1,000–5,000 charging sessions/month in year 1.

### Estimated Monthly Costs
- **Compute (5 services, containerized)** → €250–400
- **Database (Postgres/MySQL, 50GB)** → €100–150
- **Storage (logs, backups < 200GB)** → €20–30
- **Traffic (outbound ~200–300GB)** → €20–40
- **Monitoring, logging, DNS, security** → €50–80

👉 **Total: €450–700/month (~€5,400–8,400/year)**

### Lean Startup Option
- Run all services on one 2–4 vCPU VM → ~€200–300/month.
- Use smaller DB tier.
- Optimize logs/monitoring.

---

## Strategic Opportunity: Leveraging Existing Stations

Although our plan is viable with a **demo-first approach**, there is a unique opportunity:

- The system already successfully managed **1,500 company charging stations** for several years.
- This provides **proof of stability and scalability**.
- If the company grants us access to a portion of these stations, we can:
  - Deploy live system to cloud (Azure/AWS).
  - Run real payment flows immediately.
  - Generate early revenues from day one.
  - Build a stronger case for future investment.

---

## GmbH Formation – Timing Proposal

- We acknowledge the company’s request to create a GmbH.
- However, GmbH setup in Germany costs **~€25k in capital commitment + legal/admin costs**.
- We propose a **phased approach**:
  1. **Short-term (0–12 months):** Operate under personal/freelance setup with revenue share.
  2. **Mid-term (12–24 months):** Once >€50k ARR or >5 customers are reached → establish GmbH.
  3. Company can be invited as a **minor shareholder** if desired.

This ensures we **minimize upfront cost & risk**, while focusing on proving traction first.

---

## Summary

- **12-month plan** is viable with a demo-first approach, leading to 2–3 paying customers.
- **License model** ensures company benefits immediately (15% revenue share).
- **Cloud costs** are manageable (~€500/month baseline).
- **Strategic upside**: If company grants access to existing stations, we accelerate revenue and adoption.
- **GmbH proposal**: Establish only once revenues are proven, not prematurely.  
