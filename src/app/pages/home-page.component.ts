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
            Jack Garcia Co. documents weddings and milestones with calm direction, polished detail, and imagery that
            still feels personal. Every page is built to move visitors from discovery to inquiry without friction.
          </p>
          <div class="button-row">
            <a class="button-link button-link-primary" routerLink="/inquire">Inquire today</a>
            <a class="button-link button-link-secondary" routerLink="/services">Explore services</a>
          </div>
        </div>

        <div class="hero-visual editorial-card">
          <div class="image-stack">
            <div class="image-panel image-panel-tall">
              <img src="/instagram/profile-61411303911.jpg" alt="Portrait of Jack Garcia" />
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
              Couples, families, and graduates can quickly understand services, pricing direction, and what it feels
              like to work with Jack before opening the inquiry page.
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
            <p>Editorial wedding coverage designed around timeline flow, emotional moments, and clean delivery.</p>
          </article>
          <article class="editorial-card">
            <h3>Portrait sessions</h3>
            <p>Engagement, family, graduation, and couple sessions guided for natural posture and confident images.</p>
          </article>
          <article class="editorial-card">
            <h3>Inquiry-first conversion</h3>
            <p>A direct inquiry path keeps momentum high while still giving clients clear context before they reach out.</p>
          </article>
        </div>
      </section>

      <section class="section-block">
        <div class="stat-strip editorial-card">
          <div>
            <p class="eyebrow">Collections</p>
            <strong>Wedding coverage from $800</strong>
          </div>
          <div>
            <p class="eyebrow">Sessions</p>
            <strong>Portrait offerings from $180</strong>
          </div>
          <div>
            <p class="eyebrow">Approach</p>
            <strong>Guided direction, fast communication</strong>
          </div>
        </div>
      </section>

      <section class="cta-banner">
        <div>
          <p class="eyebrow">Start here</p>
          <h2>Share your date and vision to begin planning your session.</h2>
        </div>
        <a class="button-link button-link-primary" routerLink="/inquire">Inquire today</a>
      </section>
    </section>
  `,
  styleUrl: './page-styles.scss',
})
export class HomePageComponent {}
