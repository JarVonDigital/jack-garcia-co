# Jack Garcia Co. - Multi-Agent Execution Brief

## How To Use This Document
- This file is the source of truth for any AI agent working on the site refresh.
- Every agent should read the project context, confirmed client direction, shared guardrails, their assigned section, and the acceptance criteria before making changes.
- Jack is the client. Use he/him pronouns in all copy and notes.

## Project Context
- The current site is an Angular app implemented mostly in `src/app/app.ts`, `src/app/app.html`, and `src/app/app.scss`.
- `src/app/app.routes.ts` exists but is empty, so the current experience behaves like one long single-page app.
- Most content, pricing copy, and Instagram content are hardcoded in `src/app/app.ts`.
- The current UI leans heavily on Instagram framing, including visible profile-style metrics.
- There is currently no dedicated testimonials section.
- The current navigation includes `Process`, which the client wants removed.
- Existing non-wedding pricing is documented in `Services/Pricing.md`.

## Confirmed Client Direction
- Jack likes the current colors and overall format.
- Keep the warm, polished, editorial visual direction.
- Make the opening experience feel less tied to Instagram.
- Reduce or remove visible metrics like posts shared and followers from the hero and early page experience.
- Simplify the services structure around these main categories:
  - Weddings
  - Engagement
  - Families
  - Graduation
  - Couple
- Move any remaining offerings into an `Other` tab, accordion, or secondary grouping.
- Write out wedding packages clearly with inclusions and limits instead of relying on vague custom-coverage copy.
- Rewrite the About content so it is more personal to Jack, including a photo and background.
- Remove the Process section or page.
- Replace Process with a simple inquiry-first call to action.
- Add a visible client reviews or testimonials area.
- Split the site into separate pages instead of keeping every section on one long scroll.

## Approved Product Direction
- Refactor the site from a single long page into a routed multi-page Angular experience.
- Recommended primary pages:
  - Home
  - Services
  - About
  - Reviews
  - Inquire
- Optional future page if needed later:
  - Portfolio or Journal
- Keep Instagram available as supporting proof or recent work, but not as the primary brand frame.
- Keep the current visual tone while improving clarity, trust, and conversion.

## Non-Negotiables
- Do not lose the current color story or polished presentation.
- Do not let Instagram dominate the first impression.
- Do not keep Process as a major page or section.
- Do not invent fake testimonials, fake package details, or fake biography facts.
- Do make inquiry paths obvious and easy to find on every major page.
- Do keep the experience strong on both desktop and mobile.

## Content Still Needed From Jack
- Wedding package names, starting prices, hours, deliverables, add-ons, and travel rules.
- A portrait or headshot for the About page.
- Personal background copy, including story, location, experience, and approach.
- Three to six client testimonials, ideally with names and session types.
- Preferred inquiry destination: website form, email, Instagram, or a mix.
- Confirmation on whether `Couple` should remain singular in navigation or be changed to `Couples` in public-facing copy.

## Shared Guardrails For All Agents
- Keep the existing Angular, SCSS, and PrimeNG stack.
- Prefer modular routed pages or components over continuing to grow `src/app/app.html` as one giant template.
- Reuse current assets where they still fit the new direction.
- If content is missing, leave clean placeholder structure instead of writing filler.
- Preserve the warm, editorial tone already present in the site.
- Prioritize clarity, trust, and conversion over novelty.
- Remove stale references to the old Process section as part of any touched area.

## Agent 1 - Information Architecture And Content Strategy

### Mission
Define the new site structure, tighten the messaging hierarchy, and prepare copy requirements so implementation agents have clear direction.

### Read First
- `src/app/app.ts`
- `src/app/app.html`
- `Services/Pricing.md`

### Tasks
- Convert the client comments into a final content hierarchy for the multi-page site.
- Confirm the recommended sitemap: Home, Services, About, Reviews, Inquire.
- Define what content belongs on each page and what should be removed from Home.
- Rewrite the content outline so Instagram is secondary, not the hero identity.
- Define the service labels and the `Other` grouping.
- Outline the exact wedding package information still needed from Jack.
- Outline the exact About and Reviews content still needed from Jack.

### Deliverables
- Final sitemap.
- Page-by-page content outline.
- Missing-content checklist for Jack.
- Copy guidance for how to refer to services and CTAs consistently.

### Definition Of Done
- Every core page has a clear purpose.
- The new site structure matches Jack's feedback.
- Missing content is documented clearly enough that no later agent has to guess.

### Handoff To
- Agent 2, Agent 3, Agent 4, and Agent 5.

## Agent 2 - Routing And Shared Layout

### Mission
Refactor the current single-page structure into a clean routed Angular site with a shared layout, navigation, and page scaffolding.

### Read First
- `src/app/app.routes.ts`
- `src/app/app.ts`
- `src/app/app.html`
- `src/app/app.scss`

### Tasks
- Create a routed multi-page structure for Home, Services, About, Reviews, and Inquire.
- Establish a shared shell for header, footer, and navigation.
- Remove `Process` from the navigation and route structure.
- Preserve the current visual direction while splitting content into maintainable page-level components.
- Make sure mobile and desktop navigation remain polished and clear.
- Leave a clean path for optional future expansion into Portfolio or Journal.

### Deliverables
- Route map and shared layout.
- Page scaffolding for the approved primary pages.
- Updated navigation that reflects the new IA.

### Definition Of Done
- Each approved page has its own route.
- Navigation works cleanly across screen sizes.
- The site no longer depends on a single giant homepage template.

### Handoff To
- Agent 3, Agent 4, Agent 5, and Agent 6.

## Agent 3 - Services And Wedding Packages

### Mission
Make the Services experience easier to scan, more aligned with Jack's business, and more useful for booking decisions.

### Read First
- `Services/Pricing.md`
- `src/app/app.ts`
- `src/app/app.html`
- Any new content outline from Agent 1.

### Tasks
- Rework services into the five primary categories:
  - Weddings
  - Engagement
  - Families
  - Graduation
  - Couple
- Move all remaining offerings into an `Other` grouping.
- Replace generic or vague wedding language with a real wedding package structure.
- Use current known pricing where available, especially from `Services/Pricing.md`.
- Create a clean placeholder structure for wedding package details that are still pending from Jack.
- Make services feel limited, intentional, and easy to compare.

### Deliverables
- Updated Services page or section structure.
- Wedding package module with room for inclusions, limits, and pricing.
- `Other` grouping for secondary offerings.
- Consistent naming and scannable pricing presentation.

### Definition Of Done
- Services are centered on Jack's priority offerings.
- Weddings are presented as clear packages, not generic custom coverage.
- Secondary services no longer clutter the main offer hierarchy.

### Handoff To
- Agent 5 and Agent 6.

## Agent 4 - About And Reviews

### Mission
Build the trust layer of the site by making the About experience more personal and adding real social proof.

### Read First
- `src/app/app.ts`
- `src/app/app.html`
- Any new content outline from Agent 1.

### Tasks
- Rewrite the About experience around Jack rather than generic brand language.
- Add a dedicated image area for Jack's portrait or headshot.
- Make the About content speak to his background, style, and approach.
- Create a Reviews page or dedicated testimonial section that feels integrated with the brand.
- Build the reviews structure so real testimonials can be dropped in cleanly once provided.
- Avoid fabricated quotes or placeholder testimonials that read as real client statements.

### Deliverables
- Updated About page structure.
- Testimonials or Reviews page structure.
- Placeholder content framework for missing personal photo or client quotes.

### Definition Of Done
- About feels personal to Jack.
- Reviews are visible in the site architecture.
- Trust-building content is stronger than in the current version.

### Handoff To
- Agent 5 and Agent 6.

## Agent 5 - Social Reduction And Conversion Flow

### Mission
Reduce the Instagram-first feeling of the site and make inquiry the clearest next step.

### Read First
- `src/app/app.ts`
- `src/app/app.html`
- `src/app/app.scss`
- Any new IA or copy notes from Agent 1.

### Tasks
- Reduce or remove prominent follower and post-count treatments in the hero and top-level story.
- Keep Instagram as a lighter secondary element, not the lead identity block.
- Remove Process-related content and replace it with a simpler inquiry-first flow.
- Strengthen `Inquire Today` calls to action across Home, Services, About, and Reviews.
- Clarify how the contact flow should work based on the final inquiry preference.
- Make sure conversion language is simple and direct.

### Deliverables
- Updated CTA system.
- Reduced Instagram emphasis.
- Replacement for the old Process section that focuses on contacting Jack.

### Definition Of Done
- The site no longer opens like an Instagram profile clone.
- The inquiry path is obvious from any major page.
- Process is fully removed from the user-facing flow.

### Handoff To
- Agent 6.

## Agent 6 - QA, Responsiveness, And Final Polish

### Mission
Verify that the redesigned experience is cohesive, responsive, accessible, and free of outdated content patterns.

### Read First
- All changed files in `src/app/`
- Any new page components or route files
- This document

### Tasks
- Check routing, navigation, and responsive behavior across desktop and mobile.
- Check that no old Process references remain in the UI.
- Check that Instagram metrics are no longer overemphasized.
- Check spacing, hierarchy, and CTA consistency across all pages.
- Check for empty or awkward states when testimonials or package details are still pending.
- Check for accessibility basics: focus states, heading order, button clarity, and readable contrast.
- Smoke test build and interaction behavior if build execution is part of the workflow.

### Deliverables
- Final issue list, if any.
- QA pass confirmation when blockers are resolved.
- Short polish notes for any remaining low-priority cleanup.

### Definition Of Done
- The site feels intentional and consistent across pages.
- Core conversion goals are supported cleanly.
- No major regressions remain from the refactor.

## Recommended Execution Order
1. Agent 1 defines the new information architecture and content requirements.
2. Agent 2 sets up routes, shared layout, and page scaffolding.
3. Agent 3, Agent 4, and Agent 5 execute in parallel once the page structure exists.
4. Agent 6 performs QA and final polish after the feature agents finish.

## Acceptance Criteria
- The site uses separate pages instead of one long single-page scroll.
- The hero and early page experience no longer highlight Instagram follower or post counts.
- Services are reorganized around Weddings, Engagement, Families, Graduation, Couple, and `Other`.
- Wedding packages are clearly structured with room for inclusions and limits.
- The About experience centers Jack personally and includes a place for his photo.
- The Process page or section is removed.
- Reviews or testimonials are visible in the site structure.
- Inquiry CTAs are simple, visible, and consistent.
- The experience remains polished on both desktop and mobile.

## Notes For Every Agent
- Jack is the client. Do not refer to him as `she` or `her`.
- Preserve the current warm editorial aesthetic; refine it rather than replacing it.
- If real client content is missing, create structure and placeholders, not invented facts.
- Keep changes focused on the requested direction and avoid unrelated refactors.
