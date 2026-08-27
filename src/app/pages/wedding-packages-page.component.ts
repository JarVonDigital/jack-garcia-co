import { Component } from '@angular/core';
import { IconComponent } from '../shared/icon.component';

@Component({
  standalone: true,
  selector: 'app-wedding-packages-page',
  imports: [IconComponent],
  template: `
    <div class="packages-page">
      <section class="packages-hero" aria-labelledby="packages-title">
        <div class="packages-hero-shade"></div>
        <div class="packages-hero-copy shell">
          <p class="kicker light">Wedding photography</p>
          <h1 id="packages-title">Your day, told <em>fully.</em></h1>
          <p>
            Start with a base coverage, then choose the additional moments that make your
            celebration feel complete.
          </p>
          <a class="button button-light" href="#wedding-menu"
            >Explore the menu <app-icon name="arrow-down" aria-hidden="true" /></a
          >
        </div>
        <div class="packages-hero-bottom shell">
          <span>À la carte wedding menu</span><span>Build your coverage your way</span>
        </div>
      </section>

      <section class="wedding-collections section" aria-labelledby="collections-title">
        <div class="shell">
          <div class="collections-heading">
            <p class="kicker">Wedding photography</p>
            <h2 id="collections-title">Choose the story that <em>fits.</em></h2>
            <p>
              Thoughtful coverage for celebrations big and small, with room to keep the focus on
              your people and the moments you will want to return to.
            </p>
          </div>

          <div class="collections-grid">
            <article class="collection-card">
              <p class="collection-label">For intimate celebrations</p>
              <h3>Mini Story</h3>
              <p class="collection-summary">Elopements, courthouse weddings &amp; short celebrations</p>
              <ul>
                <li>3 consecutive hours of coverage</li>
                <li>Online gallery of high-resolution images</li>
              </ul>
              <p class="collection-price"><span>Starting at</span>$800</p>
              <a class="text-link" href="/#inquire">Inquire about this collection <app-icon name="arrow-up-right" aria-hidden="true" /></a>
            </article>

            <article class="collection-card collection-card-featured">
              <p class="collection-label">Most loved collection</p>
              <h3>Classic Story</h3>
              <p class="collection-summary">The complete story of your wedding day</p>
              <ul>
                <li>8 consecutive hours of coverage</li>
                <li>1-hour engagement session</li>
                <li>Online gallery of high-resolution images</li>
              </ul>
              <p class="collection-price"><span>Starting at</span>$1,800</p>
              <a class="text-link" href="/#inquire">Inquire about this collection <app-icon name="arrow-up-right" aria-hidden="true" /></a>
            </article>

            <article class="collection-card">
              <p class="collection-label">For every last detail</p>
              <h3>Editorial Story</h3>
              <p class="collection-summary">Full-day storytelling with extra perspective</p>
              <ul>
                <li>10 hours of wedding coverage</li>
                <li>1-hour engagement session</li>
                <li>Second photographer included</li>
                <li>Online gallery of high-resolution images</li>
              </ul>
              <p class="collection-price"><span>Starting at</span>$2,600</p>
              <a class="text-link" href="/#inquire">Inquire about this collection <app-icon name="arrow-up-right" aria-hidden="true" /></a>
            </article>
          </div>
        </div>
      </section>

      <section class="packages-menu" id="wedding-menu" aria-labelledby="coverage-title">
        <div class="packages-menu-inner shell">
          <div class="package-rule"></div>
          <div class="packages-heading-row">
            <h2 id="coverage-title">Base coverage</h2>
            <strong>$400</strong>
          </div>
          <div class="package-rule"></div>
          <p class="packages-includes">Includes up to 1 hour of photography or 1 wedding moment.</p>
          <p class="packages-note">
            Moment coverage is designed for short, specific portions of your celebration. For
            continuous or extended coverage, additional hourly coverage applies.
          </p>

          <div class="packages-heading-row packages-heading-row-spaced">
            <h2>Add moments</h2>
            <strong>$200 each</strong>
          </div>
          <div class="package-rule"></div>
          <ul class="moments-list">
            <li>Getting ready</li>
            <li>Family portraits</li>
            <li>Details</li>
            <li>Bridal party</li>
            <li>First looks</li>
            <li>Reception</li>
            <li>Ceremony</li>
            <li>Send off</li>
            <li>Couple portraits</li>
          </ul>

          <h2 class="enhancements-title">Add-on enhancements</h2>
          <div class="package-rule"></div>
          <dl class="enhancements-list">
            <div>
              <dt>Extra hour of coverage</dt>
              <dd>$225/hr</dd>
            </div>
            <div>
              <dt>Second photographer</dt>
              <dd>$350</dd>
            </div>
            <div>
              <dt>Drone coverage</dt>
              <dd>$250</dd>
            </div>
            <div>
              <dt>Polaroid pictures</dt>
              <dd>$50</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="content-creation" class="content-creation-package shell" aria-labelledby="content-creation-title">
        <div class="content-creation-image">
          <img
            src="/images/jack-garcia-content-creation.jpg"
            srcset="/images/responsive/jack-garcia-content-creation-960.jpg 720w, /images/responsive/jack-garcia-content-creation-1600.jpg 1200w, /images/jack-garcia-content-creation.jpg 3072w"
            sizes="(max-width: 800px) 100vw, 45vw"
            alt="Couple embracing in the ocean with a surfboard"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div class="content-creation-copy">
          <p class="kicker">Something extra</p>
          <h2 id="content-creation-title">Content creation, with all the <em>feeling.</em></h2>
          <p class="content-creation-description">
            Real, phone-captured behind-the-scenes moments made for sharing. Raw clips arrive within
            24–48 hours, with edited Reels delivered in 2–4 days.
          </p>
          <dl class="content-creation-rates">
            <div>
              <dt>Non-wedding events</dt>
              <dd>$100/hr · 1-hour min.</dd>
            </div>
            <div>
              <dt>Weddings</dt>
              <dd>$100/hr · 2-hour min.</dd>
            </div>
            <div>
              <dt>3 hours · Basics</dt>
              <dd>$300</dd>
            </div>
            <div>
              <dt>5 hours · Most popular</dt>
              <dd>$450</dd>
            </div>
            <div>
              <dt>8 hours · Full day</dt>
              <dd>$750</dd>
            </div>
            <div>
              <dt>10 hours · Full experience</dt>
              <dd>$900</dd>
            </div>
          </dl>
          <p class="content-creation-bundle-note">
            Discounted 5-, 8-, and 10-hour package pricing applies when content creation is booked
            with a Jack Garcia &amp; Co. wedding photography collection. Bundle savings range from
            $100–$200.
          </p>
        </div>
      </section>

      <section class="package-details" aria-labelledby="details-title">
        <div class="shell package-details-grid">
          <div>
            <p class="kicker">The good to know</p>
            <h2 id="details-title">Easy from the <em>start.</em></h2>
          </div>
          <div class="package-detail">
            <span>01</span>
            <div>
              <h3>Save your date</h3>
              <p>A 30% retainer secures wedding dates; all other sessions require a 50% retainer.</p>
            </div>
          </div>
          <div class="package-detail">
            <span>02</span>
            <div>
              <h3>Wherever your story is</h3>
              <p>Florida-based and available anywhere. A $50 travel fee applies beyond one hour.</p>
            </div>
          </div>
          <div class="package-detail">
            <span>03</span>
            <div>
              <h3>Made for comfort</h3>
              <p>No stiff posing or pressure. I’ll help you feel present, so your images stay true to you.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="packages-inquiry shell">
        <div>
          <p class="kicker light">Let’s plan it</p>
          <h2>Ready to build your <em>coverage?</em></h2>
        </div>
        <a class="button button-light" href="/#inquire"
          >Start an inquiry <app-icon name="arrow-up-right" aria-hidden="true" /></a
        >
      </section>
    </div>
  `,
  styleUrl: './wedding-packages-page.component.scss',
})
export class WeddingPackagesPageComponent {}
