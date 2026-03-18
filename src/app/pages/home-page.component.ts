import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page page-home">
      <section class="hero hero-home">
        <div class="hero-copy editorial-card editorial-card-strong">
          <p class="eyebrow">Home</p>
          <h1 class="hero-title">Florida wedding and portrait photography with a warm editorial point of view.</h1>
          <p class="lede">
            The new site opens with Jack's work, approach, and inquiry path first so couples and families
            can understand the experience without the brand feeling tied to an Instagram profile.
          </p>
          <div class="button-row">
            <a class="button-link button-link-primary" routerLink="/inquire">Inquire today</a>
            <a class="button-link button-link-secondary" routerLink="/services">Explore services</a>
          </div>
        </div>

        <div class="hero-visual editorial-card">
          <div class="image-stack">
            <div class="image-panel image-panel-tall">
              <img src="/instagram/profile-61411303911.jpg" alt="Jack Garcia Co. portrait placeholder" />
            </div>
            <div class="image-panel">
              <img src="/instagram/DV1F6RbDXin.jpg" alt="Couples session preview" />
            </div>
            <div class="image-panel">
              <img src="/instagram/DV8077-jatl.jpg" alt="Wedding and portrait work preview" />
            </div>
          </div>
          <div class="callout-note">
            <p class="eyebrow">Now leading with</p>
            <h2>Clear offers, trust signals, and a visible inquiry path.</h2>
            <p>
              The home page holds only the strongest overview: signature services, a more personal brand
              introduction, review visibility, and direct routes deeper into the site.
            </p>
          </div>
        </div>
      </section>

      <section class="section-block">
        <div class="section-header">
          <p class="eyebrow">Primary offers</p>
          <h2>Five core categories anchor the new experience.</h2>
        </div>
        <div class="editorial-grid editorial-grid-three">
          <article class="editorial-card">
            <h3>Weddings</h3>
            <p>Package-led coverage with clear inclusions, limits, and room for future travel details.</p>
          </article>
          <article class="editorial-card">
            <h3>Portrait sessions</h3>
            <p>Engagement, family, graduation, and couple sessions stay visible without competing for attention.</p>
          </article>
          <article class="editorial-card">
            <h3>Inquiry-first conversion</h3>
            <p>Every major page points back to a polished inquiry flow instead of an extended booking explainer.</p>
          </article>
        </div>
      </section>

      <section class="section-block">
        <div class="stat-strip editorial-card">
          <div>
            <p class="eyebrow">Architecture shift</p>
            <strong>Multi-page routing</strong>
          </div>
          <div>
            <p class="eyebrow">Trust layer</p>
            <strong>About + Reviews pages</strong>
          </div>
          <div>
            <p class="eyebrow">Future-ready</p>
            <strong>Portfolio and Journal can slot in later</strong>
          </div>
        </div>
      </section>

      <section class="cta-banner">
        <div>
          <p class="eyebrow">Next step</p>
          <h2>Make the next step obvious on the very first visit.</h2>
        </div>
        <a class="button-link button-link-primary" routerLink="/inquire">Inquire today</a>
      </section>
    </section>
  `,
  styleUrl: './page-styles.scss',
})
export class HomePageComponent {}
