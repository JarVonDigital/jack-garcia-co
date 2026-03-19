import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page">
      <section class="page-intro editorial-card editorial-card-strong reviews-hero">
        <div class="reviews-hero-copy">
          <p class="eyebrow">Reviews</p>
          <h1>Kind words from clients who wanted the experience to feel easy and the images to feel like them.</h1>
          <p class="lede">
            From weddings to portraits, clients describe the same experience: clear communication, calm direction, and
            a finished gallery that feels polished without losing the emotion of the moment.
          </p>
        </div>

        <article class="editorial-card review-highlight">
          <p class="testimonial-label">A feeling clients return to</p>
          <p class="highlight-quote">
            “We felt taken care of from the first message to the final gallery, and every photo still feels like us.”
          </p>
          <p class="reviewer-meta">Recent wedding client</p>
        </article>
      </section>

      <section class="stat-strip">
        <div>
          <strong>Clear communication</strong>
          <p>Clients know what to expect before the session, during the day, and after delivery.</p>
        </div>
        <div>
          <strong>Natural direction</strong>
          <p>Guidance keeps people comfortable in front of the camera without making moments feel staged.</p>
        </div>
        <div>
          <strong>Refined final galleries</strong>
          <p>Images arrive with a warm, consistent edit that feels elevated and true to the day.</p>
        </div>
      </section>

      <section class="section-block">
        <div class="section-header">
          <p class="eyebrow">Client stories</p>
          <h2>What it feels like to work with Jack Garcia Co.</h2>
          <p class="lede">
            These reviews speak to more than the photographs. They reflect how the day is guided, how communication is
            handled, and how easy it feels to be fully present in front of the camera.
          </p>
        </div>
        <div class="editorial-grid editorial-grid-two reviews-grid">
          <article class="testimonial-card editorial-card review-card">
            <p class="testimonial-label">Wedding day</p>
            <h3>Steady, calm, and never rushed</h3>
            <p class="review-quote">
              “Jack brought such a calm energy to the entire day. He kept us on schedule, gave direction when we
              needed it, and still made room for real moments with our family and friends. Looking through the gallery
              feels like reliving the day in the best way.”
            </p>
            <p class="reviewer-meta">Amelia + Christopher | St. Petersburg wedding</p>
          </article>
          <article class="testimonial-card editorial-card review-card">
            <p class="testimonial-label">Engagement session</p>
            <h3>Comfortable from the first few minutes</h3>
            <p class="review-quote">
              “We both showed up nervous about being in front of the camera, but that disappeared almost immediately.
              Jack gave us simple direction that never felt stiff, and the photos look natural, polished, and full of
              personality.”
            </p>
            <p class="reviewer-meta">Brianna + Luis | Tampa engagement session</p>
          </article>
          <article class="testimonial-card editorial-card review-card">
            <p class="testimonial-label">Family session</p>
            <h3>Easy direction for the whole group</h3>
            <p class="review-quote">
              “Photographing a family with kids can feel chaotic, but Jack made it feel easy. He moved quickly, kept
              everyone engaged, and somehow captured both the posed portraits we wanted and the in-between moments we
              will treasure most.”
            </p>
            <p class="reviewer-meta">The Morales family | Clearwater sunset session</p>
          </article>
          <article class="testimonial-card editorial-card review-card">
            <p class="testimonial-label">Graduation portraits</p>
            <h3>Polished without feeling overdone</h3>
            <p class="review-quote">
              “I wanted graduation photos that felt elevated but still personal, and Jack absolutely delivered. He
              helped with posing, found the best light at every stop, and gave me a gallery that felt stylish,
              confident, and true to who I am.”
            </p>
            <p class="reviewer-meta">Nia | University graduation session</p>
          </article>
        </div>
      </section>

      <section class="section-block">
        <div class="section-header">
          <p class="eyebrow">Why clients recommend him</p>
          <h2>The same themes come up again and again.</h2>
        </div>
        <div class="editorial-grid editorial-grid-three">
          <article class="editorial-card editorial-card-muted">
            <p class="testimonial-label">Before the session</p>
            <h3>Preparation feels thoughtful</h3>
            <p>
              Clients appreciate fast replies, clear planning guidance, and the confidence that comes from knowing the
              day has been considered well in advance.
            </p>
          </article>
          <article class="editorial-card">
            <p class="testimonial-label">During the shoot</p>
            <h3>Direction feels natural</h3>
            <p>
              Sessions move with intention, but never with pressure. People feel guided enough to relax and present
              enough to enjoy the experience.
            </p>
          </article>
          <article class="editorial-card">
            <p class="testimonial-label">After delivery</p>
            <h3>The gallery feels complete</h3>
            <p>
              Reviews often mention warm editing, strong storytelling, and a gallery that balances polished portraits
              with candid moments that matter.
            </p>
          </article>
        </div>
      </section>

      <section class="cta-banner">
        <div>
          <p class="eyebrow">Next step</p>
          <h2>If you want a photography experience that feels both organized and personal, start your inquiry here.</h2>
        </div>
        <div class="button-row">
          <a class="button-link button-link-secondary" routerLink="/services">View services</a>
          <a class="button-link button-link-primary" routerLink="/inquire">Inquire today</a>
        </div>
      </section>
    </section>
  `,
  styleUrl: './page-styles.scss',
})
export class ReviewsPageComponent {}
