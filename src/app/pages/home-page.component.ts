import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page page-home">
      <section class="hero hero-home">
        <div class="hero-copy editorial-card editorial-card-strong">
          <div class="hero-copy-layout">
            <div class="hero-copy-main">
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

            <div class="image-panel image-panel-inline-hero">
              <img src="/instagram/profile-61411303911.jpg" alt="Portrait of Jack Garcia" />
            </div>
          </div>
          <div class="callout-note callout-note-inset">
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

      <section class="section-block swipe-gallery-section">
        <div class="section-header">
          <p class="eyebrow">Swipe the story</p>
          <h2>An overlapping ribbon of recent frames keeps the page moving.</h2>
          <p class="lede">
            Flick through highlights from weddings, portraits, and celebrations. The gallery drifts on its own, but it
            also supports a manual swipe so visitors can slow down and explore.
          </p>
        </div>

        <section class="swipe-gallery-shell editorial-card editorial-card-strong" aria-label="Featured image gallery">
          <div class="swipe-gallery-marquee">
            <div class="swipe-gallery-track">
              @for (image of galleryImages; track image.src; let index = $index) {
                <figure class="swipe-gallery-card" [style.--card-order]="index">
                  <img [src]="image.src" [alt]="image.alt" loading="lazy" />
                </figure>
              }
              @for (image of galleryImages; track 'duplicate-' + image.src; let index = $index) {
                <figure
                  class="swipe-gallery-card swipe-gallery-card-echo"
                  [style.--card-order]="index + galleryImages.length"
                  aria-hidden="true"
                >
                  <img [src]="image.src" alt="" loading="lazy" />
                </figure>
              }
            </div>
          </div>
        </section>
      </section>
    </section>
  `,
  styleUrl: './page-styles.scss',
})
export class HomePageComponent {
  protected readonly galleryImages = [
    {
      src: '/instagram/DVcqqfoDU_7.jpg',
      alt: 'Bride and groom smiling during sunset portraits.',
    },
    {
      src: '/instagram/DU4Csankl9p.jpg',
      alt: 'Couple embracing during an editorial-style portrait session.',
    },
    {
      src: '/instagram/DVjTQEZABUP.jpg',
      alt: 'Bride posing with bouquet in soft natural light.',
    },
    {
      src: '/instagram/DT3DzShiL9l.jpg',
      alt: 'Graduation portrait with a warm golden-hour backdrop.',
    },
    {
      src: '/instagram/DVEXTFSgLUr.jpg',
      alt: 'Romantic wedding detail image with layered florals.',
    },
    {
      src: '/instagram/DUWW5b-gG7g.jpg',
      alt: 'Elegant portrait session framed with movement and texture.',
    },
  ];
}
