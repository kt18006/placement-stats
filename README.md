# JSSATE Noida · Corporate Research & Placement Analytics Platform

Welcome to the **JSS Academy of Technical Education, Noida** (`JSSATE Noida`) Companies Research & Placement Analytics Portal.

## Architecture & Implementation Overview

1. **Phase 1 UI-Only Architecture**:
   - Built with high-fidelity React 19, TypeScript, Tailwind CSS, and enterprise SaaS ergonomics.
   - Seed data is loaded from `src/data/seedCompanies.ts` with verbatim reference datasets and normalized via pure normalizers in `src/lib/companyData.ts`.
   - All state is client-authoritative with persistent `localStorage` synchronization (`selected-company` key) ensuring that browser reloads on `/company/intelligence` and `/company/skills` cleanly restore company and skill context.

2. **Public Access (No Authentication / No Login)**:
   - There is **no `/login` route**, no AuthContext, no ProtectedRoute, and no auth UI.
   - Every route (`/`, `/company/intelligence`, `/company/skills`) is directly accessible by any visitor.

3. **Institutional College Context**:
   - **`COLLEGE_NAME`**: `JSS Academy of Technical Education, Noida`
   - **`COLLEGE_SHORT`**: `JSSATE Noida`
   - Address: C-20/1, Sector 62, Noida, Gautam Buddha Nagar, Uttar Pradesh 201301.
   - Text-only branding in compliance with guidelines (NO college image files or `<img>` references to college logos).
   - Recruiting company logos are rendered via `Logo.dev` / URLs / initial fallback.

4. **Strict Placement Data Governance**:
   - In accordance with privacy and placement policy guidelines, **CTC, Stipend, and Selection Ratio are never displayed anywhere** on the platform.

5. **22 Intelligence Sections (in exact order)**:
   1. Company Identity
   2. Overview & Vision
   3. Leadership
   4. Funding & Financials
   5. Global Presence
   6. Products & Services
   7. Technology Stack
   8. Partnerships & Ecosystem
   9. Competitive Landscape
   10. Market Opportunity
   11. Core Value Proposition & ESG
   12. Culture & Work Life
   13. Recent News & Milestones
   14. Sales & Customer Metrics
   15. Risk & Compliance
   16. Work Location & Commute
   17. Safety & Wellbeing
   18. Career Growth & Learning
   19. Brand & Reputation
   20. Compensation & Benefits
   21. Digital Presence & Ratings
   22. Contact Information

6. **12 Skills & 10-Level Topic Roadmaps**:
   - Sorted descending by required level.
   - Integrated with Bloom's Taxonomy (CU, AP, AS, EV, CR) with exact color coding.
   - Criticality badges (Critical, Important, Baseline).
   - Expandable 10-level topic ladders with locked status above target levels.

7. **Phase 2 Migration Pathway**:
   - The data layer in `src/lib/companyData.ts` consumes pure `short_json` and `full_json` schemas mapping 1:1 to future Supabase JSONB columns.
   - When transitioning to Phase 2, backend API calls will feed directly into `normalizeCompanySummary`, `normalizeCompanyProfile`, and `normalizeDashboardSkills` without altering component contracts.

## Running Tests
Run the smoke test with:
```bash
npm test
```
