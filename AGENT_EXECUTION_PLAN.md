Jack Garcia Co. SPA - Agent Execution Plan (No Coding)
=======================================================
Objective
---------
Create an implementation-ready, no-code plan for a single-page Angular web application for Jack Garcia Co., focused on photography services, visual storytelling, and conversion to inquiry/booking.
Constraints and Core Decisions
------------------------------
- Framework: Angular CLI v21
- Styling: SCSS
- UI Library: PrimeNG
- Motion Library: GSAP (scroll-in-view effects only)
- Site Type: Single Page Application (SPA)
- Output in this phase: Planning + documentation only (no coding)
Agent Roles and Responsibilities
--------------------------------
1. Project Lead Agent
- Define project scope, user goals, and content hierarchy.
- Finalize page structure and section order.
- Align all other agents to one creative and technical direction.
- Deliverable: Approved project brief + section map.
2. Technical Setup Agent
- Define Angular v21 setup checklist (routing, SCSS defaults, folder structure, assets strategy).
- Define PrimeNG usage standards and component selection policy.
- Define GSAP usage boundaries for performance and maintainability.
- Deliverable: Build-ready technical setup checklist.
3. Content and Asset Audit Agent
- Review `Services/` folder and all included images/files.
- Produce inventory of available service content and visual assets.
- Map images to service categories and flag missing or weak assets.
- Deliverable: Asset inventory + content gap report.
4. Brand and Inspiration Research Agent
- Analyze inspiration sites:
  - https://masmemories.com
  - https://www.karla-and-co.com
- Analyze Jack’s Instagram style:
  - https://www.instagram.com/jackgarcia.co?igsh=MXZ6M25jZWRmZHRkOA==
- Extract visual and UX patterns worth adapting.
- Define originality guardrails to keep final design unique.
- Deliverable: Inspiration analysis + Do/Don't brand rules.
5. UX and Wireframe Agent
- Build low-fidelity SPA wireframes (desktop + mobile).
- Plan narrative scroll flow from brand intro to booking CTA.
- Assign PrimeNG component candidates per section.
- Deliverable: Section-by-section wireframe specification.
6. Visual Design Agent
- Propose 2 to 3 visual directions based on Jack’s photography mood and audience.
- Select and justify one final direction.
- Define design tokens (color, type scale, spacing, radius, shadow, motion rhythm).
- Deliverable: Final visual direction + design token system.
7. Motion Design Agent (GSAP)
- Define reveal behavior per section and element priority.
- Keep animation subtle, editorial, and performance-safe.
- Include accessibility support (`prefers-reduced-motion`) and mobile limits.
- Deliverable: Motion spec with trigger map and timing rules.
8. QA and Validation Agent
- Validate plan quality against business and UX goals.
- Run checklist for accessibility, responsiveness, consistency, and performance risk.
- Ensure design is unique while aligned to Jack’s visual identity.
- Deliverable: Final validation report + prioritized build backlog.
Recommended SPA Section Architecture
------------------------------------
1. Hero (brand statement + primary CTA)
2. Services overview
3. Signature portfolio/gallery highlights
4. About Jack (voice, values, approach)
5. Process (how sessions/projects work)
6. Social proof/testimonials
7. Contact/Inquiry/Booking CTA
PrimeNG Component Mapping (Planning)
------------------------------------
- Hero: Buttons, card-style callouts
- Services: Cards, accordion/tabs for service details
- Portfolio: Galleria/carousel/grid
- Process: Steps/timeline
- Testimonials: Carousel/cards
- Contact: Input controls, form layout, feedback/toast
GSAP Scroll-In-View Planning Rules
----------------------------------
- Animate only key storytelling elements.
- Prefer simple transitions (fade, slight translate, soft scale).
- Use staggered reveals for galleries and service cards.
- Avoid heavy parallax and animation stacking.
- Keep mobile animation lighter than desktop.
- Respect reduced motion preferences.
Execution Sequence
------------------
1. Project Lead Agent
2. Content and Asset Audit Agent + Brand Research Agent (parallel)
3. UX and Wireframe Agent
4. Visual Design Agent
5. Technical Setup Agent + Motion Design Agent
6. QA and Validation Agent
Final Deliverables (No-Code Phase)
----------------------------------
- Implementation-ready SPA blueprint
- Content/asset inventory with gaps and recommendations
- Inspiration synthesis + originality rules
- Wireframe and section behavior specification
- Design system tokens and motion spec
- Prioritized backlog for development agents
Success Criteria
----------------
- Design direction reflects Jack’s photography style and audience expectations.
- Service offerings are clear, scannable, and conversion-oriented.
- Motion enhances storytelling without harming performance/accessibility.
- Plan is specific enough for immediate implementation by coding agents.
