import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page">
      <section class="page-intro editorial-card editorial-card-strong">
        <p class="eyebrow">Reviews</p>
        <h1>Give future clients a clean place to hear what it feels like to work with Jack.</h1>
        <p class="lede">
          The layout is ready for real quotes, names, and session details without inventing social proof or
          making unfinished placeholders read like final testimonials.
        </p>
      </section>

      <section class="section-block">
        <div class="section-header">
          <p class="eyebrow">Review structure</p>
          <h2>Use clear placeholders now, then swap in approved client words later.</h2>
        </div>
        <div class="editorial-grid editorial-grid-three">
          <article class="testimonial-card editorial-card">
            <p class="testimonial-label">Pending testimonial</p>
            <h3>Wedding day experience</h3>
            <p>
              Add one approved quote focused on calm direction, coverage, and how Jack handled the pace of the day.
            </p>
            <p class="quote-meta">Client names + venue or city once approved</p>
          </article>
          <article class="testimonial-card editorial-card">
            <p class="testimonial-label">Pending testimonial</p>
            <h3>Engagement session</h3>
            <p>
              Reserve this space for a quote about comfort on camera, clear guidance, and the finished gallery.
            </p>
            <p class="quote-meta">Client names + session type once approved</p>
          </article>
          <article class="testimonial-card editorial-card">
            <p class="testimonial-label">Pending testimonial</p>
            <h3>Family, graduation, or couple session</h3>
            <p>
              Use a shorter proof point here to show that Jack's client experience carries beyond weddings too.
            </p>
            <p class="quote-meta">Client name + session category once approved</p>
          </article>
        </div>
      </section>

      <section class="section-block">
        <div class="editorial-grid editorial-grid-two">
          <article class="editorial-card editorial-card-muted">
            <p class="eyebrow">What to collect</p>
            <ul class="stack-list">
              <li>Three to six approved client testimonials</li>
              <li>First names or initials Jack is comfortable publishing</li>
              <li>Session types and optional locations tied to each quote</li>
            </ul>
          </article>
          <article class="editorial-card">
            <p class="eyebrow">How to present them</p>
            <ul class="stack-list">
              <li>Lead with real wording from the client</li>
              <li>Pair each quote with a session label for context</li>
              <li>Keep any unfilled card clearly marked as pending</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="cta-banner">
        <div>
          <p class="eyebrow">Inquiry path</p>
          <h2>Use social proof to reinforce trust, then point visitors to inquire.</h2>
        </div>
        <a class="button-link button-link-primary" routerLink="/inquire">Inquire today</a>
      </section>
    </section>
  `,
  styleUrl: './page-styles.scss',
})
export class ReviewsPageComponent {}
