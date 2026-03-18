import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page">
      <section class="page-intro editorial-card editorial-card-strong">
        <p class="eyebrow">Services</p>
        <h1>Thoughtfully structured coverage with clear starting points.</h1>
        <p class="lede">
          Services are organized so clients can quickly compare options, understand pricing direction, and choose the
          best fit for their event or session.
        </p>
      </section>

      <section class="section-block">
        <div class="editorial-grid editorial-grid-three">
          <article class="editorial-card">
            <h3>Weddings</h3>
            <p>Editorial wedding storytelling with coverage designed around timeline pace and meaningful moments.</p>
          </article>
          <article class="editorial-card">
            <h3>Engagement</h3>
            <p>Couples sessions tailored to save-the-date season, announcement imagery, and personal storytelling.</p>
          </article>
          <article class="editorial-card">
            <h3>Families</h3>
            <p>Seasonal and milestone family sessions with relaxed guidance and polished final galleries.</p>
          </article>
          <article class="editorial-card">
            <h3>Graduation</h3>
            <p>Senior and graduation portraits that balance personality, location, and clean editorial framing.</p>
          </article>
          <article class="editorial-card">
            <h3>Couple</h3>
            <p>Lifestyle-focused couple sessions with direction that stays natural and camera-confident.</p>
          </article>
          <article class="editorial-card editorial-card-muted">
            <h3>Brand & lifestyle</h3>
            <p>Select branding and automotive projects for clients who need refined, story-led visual content.</p>
          </article>
        </div>
      </section>

      <section class="section-block">
        <div class="section-header">
          <p class="eyebrow">Wedding packages</p>
          <h2>Package structure that keeps choices clear and easy to scan.</h2>
        </div>
        <div class="editorial-grid editorial-grid-three">
          <article class="package-card editorial-card">
            <p class="package-kicker">Collection I</p>
            <h3>Mini story collection</h3>
            <ul class="stack-list">
              <li>Starting at $800</li>
              <li>Essential timeline coverage</li>
              <li>Online gallery delivery</li>
            </ul>
          </article>
          <article class="package-card editorial-card">
            <p class="package-kicker">Collection II</p>
            <h3>Classic story collection</h3>
            <ul class="stack-list">
              <li>Starting at $1,800</li>
              <li>Extended lead-photographer coverage</li>
              <li>Timeline planning support</li>
            </ul>
          </article>
          <article class="package-card editorial-card">
            <p class="package-kicker">Collection III</p>
            <h3>Editorial story collection</h3>
            <ul class="stack-list">
              <li>Starting at $2,600</li>
              <li>Full-day narrative-focused coverage</li>
              <li>Priority add-on options</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="cta-banner">
        <div>
          <p class="eyebrow">Booking</p>
          <h2>Select your session type, then share your date and vision.</h2>
        </div>
        <a class="button-link button-link-primary" routerLink="/inquire">Inquire today</a>
      </section>
    </section>
  `,
  styleUrl: './page-styles.scss',
})
export class ServicesPageComponent {}
