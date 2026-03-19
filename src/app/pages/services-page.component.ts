import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ServicePillar {
  label: string;
  title: string;
  copy: string;
  details: readonly string[];
}

interface WeddingCollection {
  id: string;
  label: string;
  name: string;
  startingAt: string;
  description: string;
  coverageHours: string;
  coverageLabel: string;
  coverageScale: string;
  galleryEstimate: string;
  delivery: string;
  experienceNote: string;
  included: readonly string[];
  tailoredFor: readonly string[];
  accent: string;
}

interface SessionOffering {
  label: string;
  name: string;
  startingAt: string;
  duration: string;
  gallery: string;
  description: string;
  details: readonly string[];
}

interface PlanningStep {
  step: string;
  title: string;
  copy: string;
}

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page services-page">
      <section class="page-intro editorial-card editorial-card-strong services-hero">
        <div class="services-hero-header">
          <div class="services-hero-copy">
            <p class="eyebrow">Services</p>

            <h1>Clear collections, elevated imagery, and an experience that feels effortless.</h1>
            <p class="lede">
              Every offer is designed to answer the questions clients care about most: where pricing
              begins, how coverage scales, and what support comes with it before the camera ever
              comes out.
            </p>

            <div class="button-row">
              <a class="button-link button-link-primary" routerLink="/inquire">Start an inquiry</a>
              <a class="button-link button-link-secondary" routerLink="/reviews"
                >Read client reviews</a
              >
            </div>
          </div>

          <p class="services-hero-note">
            Wedding coverage, portrait sessions, and brand storytelling built around clear planning,
            calm direction, and polished delivery.
          </p>
        </div>

        <div class="services-hero-signals" aria-label="Starting prices and experience highlights">
          <span><strong>Wedding collections</strong> from $800</span>
          <span><strong>Portrait sessions</strong> from $180</span>
          <span><strong>Approach</strong> planning-first and quietly guided</span>
        </div>
      </section>

      <section class="section-block">
        <div class="section-header services-header-compact">
          <p class="eyebrow">Coverage map</p>
          <h2>Every offering is built around how the day actually unfolds.</h2>
          <p class="lede">
            The finish stays editorial, but never stiff. Sessions are guided enough to feel
            confident and relaxed enough to still look like you.
          </p>
        </div>

        <div class="editorial-grid editorial-grid-three services-pillars">
          @for (pillar of servicePillars; track pillar.title) {
            <article class="editorial-card services-pillar">
              <p class="package-kicker">{{ pillar.label }}</p>
              <h3>{{ pillar.title }}</h3>
              <p>{{ pillar.copy }}</p>
              <ul class="stack-list">
                @for (detail of pillar.details; track detail) {
                  <li>{{ detail }}</li>
                }
              </ul>
            </article>
          }
        </div>
      </section>

      <section class="section-block">
        <div class="section-header services-header-compact">
          <p class="eyebrow">Pricing studio</p>
          <h2>
            Compare wedding collections in one place and see what changes as coverage expands.
          </h2>
          <p class="lede">
            Instead of hiding pricing inside a PDF, the essentials live here up front. Start with
            the collection that matches the shape of the day, then layer on extras only where they
            add value.
          </p>
        </div>

        <section class="pricing-studio editorial-card editorial-card-strong">
          <div class="pricing-selector" role="tablist" aria-label="Wedding collection selector">
            @for (collection of weddingCollections; track collection.id) {
              <button
                type="button"
                class="pricing-selector-button"
                role="tab"
                [id]="'collection-tab-' + collection.id"
                [class.is-active]="collection.id === activeCollection().id"
                [attr.aria-selected]="collection.id === activeCollection().id"
                aria-controls="collection-panel"
                (click)="selectCollection(collection.id)"
              >
                <span class="pricing-selector-label">{{ collection.label }}</span>
                <strong>{{ collection.name }}</strong>
                <span class="pricing-selector-price">{{ collection.startingAt }}</span>
              </button>
            }
          </div>

          <div
            id="collection-panel"
            class="pricing-stage"
            role="tabpanel"
            [attr.aria-labelledby]="'collection-tab-' + activeCollection().id"
            [style.--collection-accent]="activeCollection().accent"
            [style.--collection-progress]="activeCollection().coverageScale"
          >
            <div class="pricing-stage-copy" aria-live="polite">
              <p class="package-kicker">{{ activeCollection().label }}</p>
              <h3>{{ activeCollection().name }}</h3>
              <p class="pricing-stage-price">{{ activeCollection().startingAt }}</p>
              <p class="pricing-stage-summary">{{ activeCollection().description }}</p>

              <div class="pricing-highlights">
                <div>
                  <span>Coverage</span>
                  <strong>{{ activeCollection().coverageHours }}</strong>
                </div>
                <div>
                  <span>Gallery</span>
                  <strong>{{ activeCollection().galleryEstimate }}</strong>
                </div>
                <div>
                  <span>Delivery</span>
                  <strong>{{ activeCollection().delivery }}</strong>
                </div>
              </div>
            </div>

            <div class="pricing-stage-panel">
              <div class="pricing-lens">
                <div class="pricing-lens-ring" aria-hidden="true">
                  <span class="pricing-lens-stage pricing-lens-stage-start">Opening</span>
                  <span class="pricing-lens-stage pricing-lens-stage-mid">Portraits</span>
                  <span class="pricing-lens-stage pricing-lens-stage-end">Celebration</span>
                </div>
                <div class="pricing-lens-core">
                  <span>Coverage shape</span>
                  <strong>{{ activeCollection().coverageHours }}</strong>
                  <small>{{ activeCollection().coverageLabel }}</small>
                </div>
                <p>{{ activeCollection().experienceNote }}</p>
              </div>

              <article class="pricing-panel-card">
                <p class="package-kicker">Included</p>
                <ul class="stack-list">
                  @for (item of activeCollection().included; track item) {
                    <li>{{ item }}</li>
                  }
                </ul>
              </article>

              <article class="pricing-panel-card pricing-panel-card-muted">
                <p class="package-kicker">Tailored for</p>
                <ul class="stack-list">
                  @for (item of activeCollection().tailoredFor; track item) {
                    <li>{{ item }}</li>
                  }
                </ul>
              </article>
            </div>
          </div>

          <div class="pricing-addon-strip" aria-label="Popular add-ons">
            @for (addon of addOns; track addon) {
              <span>{{ addon }}</span>
            }
          </div>
        </section>
      </section>

      <section class="section-block">
        <div class="section-header services-header-compact">
          <p class="eyebrow">Portrait pricing</p>
          <h2>Simple session options for couples, families, seniors, and brand storytelling.</h2>
          <p class="lede">
            Portrait sessions carry the same calm direction and polished finish as wedding work,
            just scaled for a lighter footprint and faster turnaround.
          </p>
        </div>

        <div class="editorial-grid editorial-grid-two services-session-grid">
          @for (session of sessionOfferings; track session.name) {
            <article class="editorial-card session-card">
              <div class="session-card-top">
                <div>
                  <p class="package-kicker">{{ session.label }}</p>
                  <h3>{{ session.name }}</h3>
                </div>
                <p class="session-price">{{ session.startingAt }}</p>
              </div>

              <p>{{ session.description }}</p>

              <div class="session-meta">
                <span>{{ session.duration }}</span>
                <span>{{ session.gallery }}</span>
              </div>

              <ul class="stack-list">
                @for (detail of session.details; track detail) {
                  <li>{{ detail }}</li>
                }
              </ul>
            </article>
          }
        </div>
      </section>

      <section class="section-block">
        <div class="section-header services-header-compact">
          <p class="eyebrow">Experience</p>
          <h2>A streamlined process keeps communication clear and the work consistent.</h2>
        </div>

        <div class="editorial-grid editorial-grid-three services-process-grid">
          @for (step of planningSteps; track step.step) {
            <article class="editorial-card process-card">
              <p class="process-step">{{ step.step }}</p>
              <h3>{{ step.title }}</h3>
              <p>{{ step.copy }}</p>
            </article>
          }
        </div>
      </section>

      <section class="cta-banner services-cta">
        <div>
          <p class="eyebrow">Ready when you are</p>
          <h2>
            Share the date, the city, and the atmosphere you want. The right collection can be
            shaped from there.
          </h2>
        </div>
        <a class="button-link button-link-primary" routerLink="/inquire">Inquire today</a>
      </section>
    </section>
  `,
  styleUrls: ['./page-styles.scss', './services-page.component.scss'],
})
export class ServicesPageComponent {
  protected readonly servicePillars: readonly ServicePillar[] = [
    {
      label: 'Weddings',
      title: 'Narrative-led wedding coverage',
      copy: 'Coverage is shaped around the natural rhythm of the day so portraits feel intentional, family groupings stay efficient, and the in-between moments never get rushed.',
      details: [
        'Timeline guidance before the wedding day',
        'Portrait direction that keeps energy relaxed',
        'Clean online gallery delivery with high-resolution downloads',
      ],
    },
    {
      label: 'Portraits',
      title: 'Sessions with movement and ease',
      copy: 'Engagements, seniors, families, and milestone sessions are directed with a light hand so the images feel polished without looking over-rehearsed.',
      details: [
        'Location and wardrobe guidance before the session',
        'Natural prompts for connection, posture, and movement',
        'Fast, gallery-based delivery for easy sharing and printing',
      ],
    },
    {
      label: 'Brands',
      title: 'Editorial content for growing businesses',
      copy: 'Brand, lifestyle, and select automotive projects are quoted around scope, usage, and creative direction so the final work is as useful as it is beautiful.',
      details: [
        'Creative planning around launch goals and deliverables',
        'Visual direction that stays clean and brand-aware',
        'Custom quoting for campaigns, teams, and story-led content',
      ],
    },
  ];

  protected readonly weddingCollections: readonly WeddingCollection[] = [
    {
      id: 'ceremony-edit',
      label: 'Collection I',
      name: 'Ceremony Edit',
      startingAt: '$800',
      description:
        'A focused collection for intimate celebrations that need the essentials covered beautifully without overbuilding the day.',
      coverageHours: '3 hours',
      coverageLabel: 'ceremony, portraits, and immediate family coverage',
      coverageScale: '34%',
      galleryEstimate: '175+ images',
      delivery: 'Preview within 72 hours',
      experienceNote:
        'Best for courthouse weddings, intimate guest counts, and couples who want elegant storytelling in a shorter window.',
      included: [
        'Lead photographer coverage',
        'Pre-event planning call and timeline outline',
        'Professionally edited online gallery',
      ],
      tailoredFor: [
        'Shorter timelines with no wasted coverage',
        'Intentional portrait time after the ceremony',
        'Couples prioritizing simplicity and clarity',
      ],
      accent: 'rgba(154, 169, 133, 0.9)',
    },
    {
      id: 'signature-day',
      label: 'Collection II',
      name: 'Signature Day',
      startingAt: '$1,800',
      description:
        'The most balanced option for wedding days that need enough room for getting ready, ceremony coverage, portraits, and the start of the celebration.',
      coverageHours: '6 hours',
      coverageLabel: 'prep, vows, portraits, and reception highlights',
      coverageScale: '63%',
      galleryEstimate: '400+ images',
      delivery: 'Preview within 5 days',
      experienceNote:
        'Best for couples who want the day covered with breathing room, polished portrait time, and a gallery that still feels complete.',
      included: [
        'Lead photographer coverage with planning support',
        'Timeline guidance built around the strongest light and flow',
        'Full online gallery with print-ready files',
      ],
      tailoredFor: [
        'Traditional wedding timelines with multiple chapters',
        'Clients who want the clearest value-to-coverage balance',
        'Celebrations where portraits and guest candids matter equally',
      ],
      accent: 'rgba(123, 145, 103, 0.92)',
    },
    {
      id: 'full-story',
      label: 'Collection III',
      name: 'Full Story',
      startingAt: '$2,600',
      description:
        'Built for wedding days that deserve the full narrative, from quiet setup details to late-night energy, without compressing the story.',
      coverageHours: '8 to 10 hours',
      coverageLabel: 'the entire arc of the day, start to send-off',
      coverageScale: '88%',
      galleryEstimate: '650+ images',
      delivery: 'Preview within 1 week',
      experienceNote:
        'Best for layered wedding timelines, destination celebrations, and couples who want the finished gallery to feel expansive and complete.',
      included: [
        'Extended wedding-day coverage with planning collaboration',
        'Refined portrait pacing without pulling focus from the celebration',
        'Priority turnaround and add-on planning flexibility',
      ],
      tailoredFor: [
        'Days with multiple locations or cultural traditions',
        'Couples who want fuller storytelling from start to finish',
        'Wedding weekends where extra coverage can be layered in',
      ],
      accent: 'rgba(95, 122, 80, 0.95)',
    },
  ];

  protected readonly sessionOfferings: readonly SessionOffering[] = [
    {
      label: 'Couples',
      name: 'Engagement and anniversary sessions',
      startingAt: '$180',
      duration: '45 to 60 minutes',
      gallery: '60+ images',
      description:
        'A guided portrait session designed for save-the-dates, proposals, anniversaries, or simply documenting this season with style and ease.',
      details: [
        'Location guidance matched to your tone and wardrobe',
        'Natural prompts for movement, connection, and variety',
        'Online gallery delivery with high-resolution downloads',
      ],
    },
    {
      label: 'Family',
      name: 'Family and milestone sessions',
      startingAt: '$220',
      duration: '60 minutes',
      gallery: '75+ images',
      description:
        'Built for growing families, maternity sessions, birthday portraits, and the kinds of milestones worth revisiting years from now.',
      details: [
        'Flexible groupings for immediate family and pairings',
        'Direction that keeps little ones engaged without pressure',
        'Polished edits that still preserve warmth and personality',
      ],
    },
    {
      label: 'Seniors',
      name: 'Senior and graduation portraits',
      startingAt: '$180',
      duration: '45 to 60 minutes',
      gallery: '65+ images',
      description:
        'Portraits that balance personality with polish, whether the goal is announcements, cap-and-gown imagery, or a more editorial senior session.',
      details: [
        'Clean posing guidance with room for personality',
        'Location pacing that supports outfit changes and variety',
        'Gallery crafted for announcements, social, and prints',
      ],
    },
    {
      label: 'Brand',
      name: 'Brand and lifestyle storytelling',
      startingAt: 'Custom quote',
      duration: 'Scope-based',
      gallery: 'Usage-led delivery',
      description:
        'Ideal for founders, personal brands, and launch campaigns that need portraits, details, and story-led content that feels elevated and useful.',
      details: [
        'Shot planning around deliverables and content needs',
        'Visual direction aligned to brand tone and audience',
        'Custom proposals for commercial scope and licensing',
      ],
    },
  ];

  protected readonly planningSteps: readonly PlanningStep[] = [
    {
      step: '01',
      title: 'Choose the closest fit',
      copy: 'Start with the collection or session that most closely matches your timeline, then share the date, location, and the overall feel you want.',
    },
    {
      step: '02',
      title: 'Shape the experience',
      copy: 'Coverage is refined around real priorities like portrait timing, family logistics, brand deliverables, or how much of the day should be documented.',
    },
    {
      step: '03',
      title: 'Photograph and deliver',
      copy: 'On the day itself, direction stays calm and efficient. Afterward, previews arrive quickly and the full gallery is edited for a consistent, polished finish.',
    },
  ];

  protected readonly addOns = [
    'Engagement session',
    'Extra hour blocks',
    'Rehearsal dinner coverage',
    'Second location portraits',
    'Keepsake albums',
    'Rush gallery delivery',
  ] as const;

  protected readonly activeCollectionId = signal(this.weddingCollections[1].id);
  protected readonly activeCollection = computed(
    () =>
      this.weddingCollections.find((collection) => collection.id === this.activeCollectionId()) ??
      this.weddingCollections[0],
  );

  protected selectCollection(collectionId: string): void {
    this.activeCollectionId.set(collectionId);
  }
}
