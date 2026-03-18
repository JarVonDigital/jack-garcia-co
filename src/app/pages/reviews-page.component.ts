import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page">
      <section class="page-intro editorial-card editorial-card-strong">
        <p class="eyebrow">Reviews</p>
        <h1>Client feedback that reflects the full experience, not only the final gallery.</h1>
        <p class="lede">
          Reviews highlight how Jack communicates, directs sessions, and delivers final images so new clients can book
          with confidence.
        </p>
      </section>

      <section class="section-block">
        <div class="section-header">
          <p class="eyebrow">What clients mention most</p>
          <h2>Consistent direction, calm pacing, and galleries that feel true to the day.</h2>
        </div>
        <div class="editorial-grid editorial-grid-three">
          <article class="testimonial-card editorial-card">
            <p class="testimonial-label">Wedding review</p>
            <h3>Wedding day experience</h3>
            <p>
              Couples consistently mention how Jack keeps the day organized while still creating space for natural
              emotion and unscripted moments.
            </p>
            <p class="quote-meta">Common feedback: clear timeline support and calm communication</p>
          </article>
          <article class="testimonial-card editorial-card">
            <p class="testimonial-label">Portrait review</p>
            <h3>Engagement session</h3>
            <p>
              Engagement clients describe feeling comfortable in front of the camera, even if they start the session
              saying they are not naturally photogenic.
            </p>
            <p class="quote-meta">Common feedback: natural posing cues and quick rapport</p>
          </article>
          <article class="testimonial-card editorial-card">
            <p class="testimonial-label">Milestone review</p>
            <h3>Family, graduation, or couple session</h3>
            <p>
              Families and graduates value the balance of polished direction and flexibility, especially when sessions
              involve multiple people, locations, or quick transitions.
            </p>
            <p class="quote-meta">Common feedback: efficient pacing and consistent edits</p>
          </article>
        </div>
      </section>

      <section class="section-block">
        <div class="editorial-grid editorial-grid-two">
          <article class="editorial-card editorial-card-muted">
            <p class="eyebrow">Testimonial format</p>
            <ul class="stack-list">
              <li>Include the session type and location context</li>
              <li>Highlight communication and delivery experience</li>
              <li>Keep quotes concise and easy to scan on mobile</li>
            </ul>
          </article>
          <article class="editorial-card">
            <p class="eyebrow">Best placement</p>
            <ul class="stack-list">
              <li>Pair each quote with relevant gallery imagery</li>
              <li>Use weddings and portraits together for balance</li>
              <li>Link directly to inquiry after each trust section</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="cta-banner">
        <div>
          <p class="eyebrow">Next step</p>
          <h2>If the experience fits your vision, start your inquiry today.</h2>
        </div>
        <a class="button-link button-link-primary" routerLink="/inquire">Inquire today</a>
      </section>
    </section>
  `,
  styleUrl: './page-styles.scss',
})
export class ReviewsPageComponent {}
