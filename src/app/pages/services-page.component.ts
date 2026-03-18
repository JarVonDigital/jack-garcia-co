import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page">
      <section class="page-intro editorial-card editorial-card-strong">
        <p class="eyebrow">Services</p>
        <h1>Thoughtfully structured offers, now split into clear booking categories.</h1>
        <p class="lede">
          The services page now keeps Jack's priority offers easy to compare while directing visitors
          toward a single, clear inquiry path.
        </p>
      </section>

      <section class="section-block">
        <div class="editorial-grid editorial-grid-three">
          <article class="editorial-card">
            <h3>Weddings</h3>
            <p>Lead with package cards instead of generic coverage language.</p>
          </article>
          <article class="editorial-card">
            <h3>Engagement</h3>
            <p>Positioned as a distinct portrait offering with its own story and booking path.</p>
          </article>
          <article class="editorial-card">
            <h3>Families</h3>
            <p>Kept visible for seasonal sessions without crowding the hero experience.</p>
          </article>
          <article class="editorial-card">
            <h3>Graduation</h3>
            <p>Easy to scan, direct to inquire, and consistent with the rest of the pricing language.</p>
          </article>
          <article class="editorial-card">
            <h3>Couple</h3>
            <p>Retained exactly as requested until Jack confirms whether public copy should read Couples.</p>
          </article>
          <article class="editorial-card editorial-card-muted">
            <h3>Other</h3>
            <p>Reserved for secondary offerings so the main categories stay focused and easy to compare.</p>
          </article>
        </div>
      </section>

      <section class="section-block">
        <div class="section-header">
          <p class="eyebrow">Wedding packages</p>
          <h2>Clear placeholders are ready for the details still needed from Jack.</h2>
        </div>
        <div class="editorial-grid editorial-grid-three">
          <article class="package-card editorial-card">
            <p class="package-kicker">Package one</p>
            <h3>Name pending</h3>
            <ul class="stack-list">
              <li>Hours of coverage</li>
              <li>Gallery delivery details</li>
              <li>Engagement session or add-ons</li>
            </ul>
          </article>
          <article class="package-card editorial-card">
            <p class="package-kicker">Package two</p>
            <h3>Name pending</h3>
            <ul class="stack-list">
              <li>Lead photographer coverage</li>
              <li>Second shooter confirmation</li>
              <li>Travel and timeline notes</li>
            </ul>
          </article>
          <article class="package-card editorial-card">
            <p class="package-kicker">Package three</p>
            <h3>Name pending</h3>
            <ul class="stack-list">
              <li>Starting price</li>
              <li>Coverage limits</li>
              <li>Album or print options</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="cta-banner">
        <div>
          <p class="eyebrow">Cross-page path</p>
          <h2>Choose the right session, then move straight into inquiry.</h2>
        </div>
        <a class="button-link button-link-primary" routerLink="/inquire">Inquire today</a>
      </section>
    </section>
  `,
  styleUrl: './page-styles.scss',
})
export class ServicesPageComponent {}
