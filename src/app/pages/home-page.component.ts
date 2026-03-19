import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page page-home">
      <section class="showcase-slider" aria-label="Featured work showcase">
        <div
          class="showcase-slider-stage"
          [class.is-dragging]="isShowcasePointerDown"
          (mousedown)="onShowcaseMouseDown($event)"
          (mousemove)="onShowcaseMouseMove($event)"
          (mouseup)="onShowcaseMouseUp()"
          (mouseleave)="onShowcaseMouseLeave()"
          (touchstart)="onShowcaseTouchStart($event)"
          (touchmove)="onShowcaseTouchMove($event)"
          (touchend)="onShowcaseTouchEnd()"
          (touchcancel)="onShowcaseTouchCancel()"
        >
          <div
            class="showcase-slider-track"
            [class.is-swiping]="isSwipingShowcase"
            [style.transform]="showcaseTrackTransform"
          >
            @for (slide of showcaseSlides; track slide.imageSrc; let index = $index) {
              <article class="showcase-slide">
                <img
                  class="showcase-slide-image"
                  [src]="slide.imageSrc"
                  [alt]="slide.imageAlt"
                  [attr.loading]="index === 0 ? 'eager' : 'lazy'"
                />
                <div class="showcase-slide-scrim"></div>
                <div class="showcase-slide-grid" [class.is-active]="activeShowcaseSlide === index">
                  <div class="showcase-slide-copy editorial-card">
                    <div class="showcase-slide-copy-topline">
                      <p class="eyebrow">{{ slide.kicker }}</p>
                      <p class="showcase-slide-count">0{{ index + 1 }} / 0{{ showcaseSlides.length }}</p>
                    </div>
                    <h2 class="showcase-slide-title">{{ slide.title }}</h2>
                    <p class="showcase-slide-summary">
                      {{ slide.summary }}
                    </p>
                    <div class="showcase-slide-metrics" aria-label="Highlighted specialties">
                      @for (metric of slide.metrics; track metric) {
                        <span>{{ metric }}</span>
                      }
                    </div>
                    <div class="button-row">
                      <a class="button-link button-link-primary" routerLink="/inquire">Start your inquiry</a>
                      <a class="button-link button-link-secondary" routerLink="/services">See the collections</a>
                    </div>
                  </div>

                  <div class="showcase-motion-text" aria-hidden="true">
                    @for (word of slide.motionWords; track word; let wordIndex = $index) {
                      <span [style.--motion-index]="wordIndex">{{ word }}</span>
                    }
                  </div>
                </div>
              </article>
            }
          </div>

          <div class="showcase-slider-controls">
            <button type="button" class="showcase-slider-arrow" (click)="showPreviousShowcaseSlide()" aria-label="Show previous featured project">
              Prev
            </button>

            <div class="showcase-slider-dots" aria-label="Select featured project">
              @for (slide of showcaseSlides; track slide.imageSrc; let index = $index) {
                <button
                  type="button"
                  class="showcase-slider-dot"
                  [class.is-active]="activeShowcaseSlide === index"
                  [attr.aria-label]="'Show slide ' + (index + 1)"
                  [attr.aria-pressed]="activeShowcaseSlide === index"
                  (click)="goToShowcaseSlide(index)"
                ></button>
              }
            </div>

            <button type="button" class="showcase-slider-arrow" (click)="showNextShowcaseSlide()" aria-label="Show next featured project">
              Next
            </button>
          </div>

          <div class="showcase-slider-progress" aria-hidden="true">
            <span [style.width.%]="((activeShowcaseSlide + 1) / showcaseSlides.length) * 100"></span>
          </div>

          <div class="showcase-slider-ticker" aria-hidden="true">
            <div class="showcase-slider-ticker-track">
              <span>Weddings</span>
              <span>Portraits</span>
              <span>Graduates</span>
              <span>Couples</span>
              <span>Celebrations</span>
              <span>Details</span>
              <span>Weddings</span>
              <span>Portraits</span>
              <span>Graduates</span>
              <span>Couples</span>
              <span>Celebrations</span>
              <span>Details</span>
            </div>
          </div>
        </div>
      </section>

      <section class="hero hero-home">
        <div class="hero-copy editorial-card editorial-card-strong">
          <div class="hero-copy-layout">
            <div class="hero-copy-main">
              <p class="eyebrow">Home</p>
              <h1 class="hero-title">Florida wedding, portrait, and milestone photography with calm direction and an editorial finish.</h1>
              <p class="lede">
                Jack Garcia Co. photographs weddings, engagements, portraits, and milestone seasons with thoughtful
                pacing, polished detail, and images that still feel personal to the people in them.
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
            <p class="eyebrow">What to expect</p>
            <h2>A clear, welcoming experience from first inquiry to final gallery.</h2>
            <p>
              Services, starting points, and next steps are easy to understand so you can reach out with confidence
              and know what working together will feel like.
            </p>
          </div>
          </div>
        </section>

        <section class="section-block">
          <div class="section-header">
            <p class="eyebrow">Services</p>
            <h2>Coverage built for weddings, portraits, and story-led brand work.</h2>
          </div>
          <div class="editorial-grid editorial-grid-three">
            <article class="editorial-card">
              <h3>Weddings</h3>
              <p>Wedding coverage shaped around the rhythm of the day, with room for portraits, emotion, and the details that complete the story.</p>
            </article>
            <article class="editorial-card">
              <h3>Portrait sessions</h3>
              <p>Couples, family, and graduation sessions are guided with a light hand so the images feel polished without feeling over-rehearsed.</p>
            </article>
            <article class="editorial-card">
              <h3>Brand storytelling</h3>
              <p>Editorial content for founders and growing brands is planned around scope, usage, and visuals that feel elevated and useful.</p>
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
          <h2>Share your date, location, and vision to start planning.</h2>
        </div>
        <a class="button-link button-link-primary" routerLink="/inquire">Inquire today</a>
      </section>

      <section class="section-block swipe-gallery-section">
        <div class="section-header">
          <p class="eyebrow">Recent work</p>
          <h2>A closer look at the movement, emotion, and detail behind the work.</h2>
          <p class="lede">
            Browse a mix of weddings, portraits, and celebrations to get a feel for Jack&apos;s style across full stories,
            quiet in-between moments, and the portraits clients return to most.
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
export class HomePageComponent implements OnInit, OnDestroy {
  protected activeShowcaseSlide = 0;
  protected isShowcasePointerDown = false;
  protected isSwipingShowcase = false;
  protected readonly showcaseSlides = [
    {
      kicker: 'Featured weddings',
      title: 'Editorial frames with the movement, scale, and feeling of the full day.',
      summary:
        'From the anticipation before the ceremony to the energy later in the evening, wedding coverage stays attentive to emotion, movement, and the details that complete the story.',
      imageSrc: '/instagram/DVcqqfoDU_7.jpg',
      imageAlt: 'Bride and groom smiling during sunset portraits.',
      metrics: ['Timeline-aware coverage', 'Romantic direction', 'Polished delivery'],
      motionWords: ['Weddings', 'Emotion', 'Editorial'],
    },
    {
      kicker: 'Engagement sessions',
      title: 'Natural connection, confident direction, and portraits that never feel overworked.',
      summary:
        'Couple sessions are guided with a light hand so the images feel intimate, relaxed, and polished without losing the personality between you.',
      imageSrc: '/instagram/DU4Csankl9p.jpg',
      imageAlt: 'Couple embracing during an editorial-style engagement session.',
      metrics: ['Engagements', 'Connection', 'Natural prompts'],
      motionWords: ['Couples', 'Warmth', 'Ease'],
    },
    {
      kicker: 'Celebration details',
      title: 'Layered florals, fashion details, and quiet moments all share the same spotlight.',
      summary:
        'Floral design, fashion details, tablescapes, and quieter moments are photographed with the same care as the portraits, giving the gallery depth and texture.',
      imageSrc: '/instagram/DVEXTFSgLUr.jpg',
      imageAlt: 'Romantic wedding detail image with layered florals.',
      metrics: ['Details', 'Reception mood', 'Visual storytelling'],
      motionWords: ['Details', 'Texture', 'Story'],
    },
    {
      kicker: 'Bridal portraits',
      title: 'Graceful bridal portraits hold onto softness while still feeling elevated and fashion-led.',
      summary:
        'Bridal portraits balance soft light, clean posing, and quiet confidence for images that feel timeless, polished, and unmistakably personal.',
      imageSrc: '/instagram/DVjTQEZABUP.jpg',
      imageAlt: 'Bride posing with bouquet in soft natural light.',
      metrics: ['Bridal styling', 'Soft light', 'Elegant posing'],
      motionWords: ['Bridal', 'Softness', 'Polish'],
    },
    {
      kicker: 'Graduation sessions',
      title: 'Milestone portraits stay bright, modern, and full of movement instead of stiff or generic.',
      summary:
        'Senior and graduation sessions bring personality into the frame with flattering light, relaxed direction, and a finish that feels current instead of overly formal.',
      imageSrc: '/instagram/DT3DzShiL9l.jpg',
      imageAlt: 'Graduation portrait with a warm golden-hour backdrop.',
      metrics: ['Milestones', 'Golden hour', 'Modern portraiture'],
      motionWords: ['Graduates', 'Motion', 'Confidence'],
    },
    {
      kicker: 'Editorial portraits',
      title: 'Movement, texture, and clean direction give portrait work a refined finish.',
      summary:
        'Portrait sessions leave room for motion, styling, and subtle direction so the final gallery feels elevated, modern, and still easy to connect with.',
      imageSrc: '/instagram/DUWW5b-gG7g.jpg',
      imageAlt: 'Editorial portrait session framed with movement and texture.',
      metrics: ['Portraiture', 'Movement', 'Editorial texture'],
      motionWords: ['Portraits', 'Rhythm', 'Polish'],
    },
  ];
  protected readonly galleryImages = [
    {
      src: '/instagram/DVcqqfoDU_7.jpg',
      alt: 'Bride and groom smiling during sunset portraits.',
    },
    {
      src: '/instagram/DU4Csankl9p.jpg',
      alt: 'Couple embracing during an editorial-style engagement session.',
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
      alt: 'Editorial portrait session framed with movement and texture.',
    },
  ];

  private showcaseIntervalId?: ReturnType<typeof setInterval>;
  private showcasePointerActive = false;
  private showcaseTouchStartX = 0;
  private showcaseTouchStartY = 0;
  private showcaseTouchOffsetX = 0;

  ngOnInit(): void {
    this.startShowcaseRotation();
  }

  ngOnDestroy(): void {
    this.stopShowcaseRotation();
  }

  protected goToShowcaseSlide(index: number): void {
    this.activeShowcaseSlide = index;
    this.restartShowcaseRotation();
  }

  protected showPreviousShowcaseSlide(): void {
    this.activeShowcaseSlide =
      (this.activeShowcaseSlide - 1 + this.showcaseSlides.length) % this.showcaseSlides.length;
    this.restartShowcaseRotation();
  }

  protected showNextShowcaseSlide(): void {
    this.activeShowcaseSlide = (this.activeShowcaseSlide + 1) % this.showcaseSlides.length;
    this.restartShowcaseRotation();
  }

  protected get showcaseTrackTransform(): string {
    return `translate3d(calc(${-this.activeShowcaseSlide * 100}% + ${this.showcaseTouchOffsetX}px), 0, 0)`;
  }

  protected onShowcaseTouchStart(event: TouchEvent): void {
    if (event.touches.length !== 1) {
      return;
    }

    this.startShowcaseInteraction(event.touches[0].clientX, event.touches[0].clientY);
  }

  protected onShowcaseTouchMove(event: TouchEvent): void {
    if (event.touches.length !== 1) {
      return;
    }

    if (this.updateShowcaseInteraction(event.touches[0].clientX, event.touches[0].clientY)) {
      event.preventDefault();
    }
  }

  protected onShowcaseTouchEnd(): void {
    this.finishShowcaseInteraction();
  }

  protected onShowcaseMouseDown(event: MouseEvent): void {
    if (event.button !== 0) {
      return;
    }

    this.showcasePointerActive = true;
    this.startShowcaseInteraction(event.clientX, event.clientY);
  }

  protected onShowcaseMouseMove(event: MouseEvent): void {
    if (!this.showcasePointerActive) {
      return;
    }

    if (this.updateShowcaseInteraction(event.clientX, event.clientY)) {
      event.preventDefault();
    }
  }

  protected onShowcaseMouseUp(): void {
    if (!this.showcasePointerActive) {
      return;
    }

    this.showcasePointerActive = false;
    this.finishShowcaseInteraction();
  }

  protected onShowcaseMouseLeave(): void {
    if (!this.showcasePointerActive) {
      return;
    }

    this.showcasePointerActive = false;
    this.finishShowcaseInteraction();
  }

  protected onShowcaseTouchCancel(): void {
    this.resetShowcaseSwipe();
    this.restartShowcaseRotation();
  }

  private startShowcaseRotation(): void {
    this.stopShowcaseRotation();
    this.showcaseIntervalId = setInterval(() => {
      this.activeShowcaseSlide = (this.activeShowcaseSlide + 1) % this.showcaseSlides.length;
    }, 6200);
  }

  private restartShowcaseRotation(): void {
    this.startShowcaseRotation();
  }

  private stopShowcaseRotation(): void {
    if (this.showcaseIntervalId) {
      clearInterval(this.showcaseIntervalId);
      this.showcaseIntervalId = undefined;
    }
  }

  private startShowcaseInteraction(clientX: number, clientY: number): void {
    this.isShowcasePointerDown = true;
    this.showcaseTouchStartX = clientX;
    this.showcaseTouchStartY = clientY;
    this.showcaseTouchOffsetX = 0;
    this.isSwipingShowcase = false;
    this.stopShowcaseRotation();
  }

  private updateShowcaseInteraction(clientX: number, clientY: number): boolean {
    const deltaX = clientX - this.showcaseTouchStartX;
    const deltaY = clientY - this.showcaseTouchStartY;

    if (!this.isSwipingShowcase && Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 12) {
      this.resetShowcaseSwipe();
      this.restartShowcaseRotation();
      return false;
    }

    if (Math.abs(deltaX) < 12) {
      return false;
    }

    this.isSwipingShowcase = true;
    this.showcaseTouchOffsetX = Math.max(-140, Math.min(140, deltaX));
    return true;
  }

  private finishShowcaseInteraction(): void {
    if (!this.isSwipingShowcase) {
      this.resetShowcaseSwipe();
      this.restartShowcaseRotation();
      return;
    }

    const swipeThreshold = 70;
    const swipeOffsetX = this.showcaseTouchOffsetX;

    this.resetShowcaseSwipe();

    if (swipeOffsetX <= -swipeThreshold) {
      this.showNextShowcaseSlide();
      return;
    }

    if (swipeOffsetX >= swipeThreshold) {
      this.showPreviousShowcaseSlide();
      return;
    }

    this.restartShowcaseRotation();
  }

  private resetShowcaseSwipe(): void {
    this.isShowcasePointerDown = false;
    this.showcasePointerActive = false;
    this.isSwipingShowcase = false;
    this.showcaseTouchStartX = 0;
    this.showcaseTouchStartY = 0;
    this.showcaseTouchOffsetX = 0;
  }
}
