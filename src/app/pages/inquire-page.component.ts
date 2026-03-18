import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page">
      <section class="page-intro editorial-card editorial-card-strong">
        <p class="eyebrow">Inquire</p>
        <h1>Make it easy for visitors to start the conversation.</h1>
        <p class="lede">
          This page now replaces the old step-heavy flow with a direct booking step and a clean place
          to drop in Jack's preferred form, email, or linked contact destination.
        </p>
      </section>

      <section class="section-block">
        <div class="editorial-grid editorial-grid-two">
          <article class="editorial-card">
            <h2>What visitors should share</h2>
            <ul class="stack-list">
              <li>Session type or celebration</li>
              <li>Date, timeframe, or destination</li>
              <li>Desired mood, setting, or story</li>
            </ul>
          </article>

          <article class="editorial-card editorial-card-muted">
            <h2>Still needed to publish the final contact flow</h2>
            <ul class="stack-list">
              <li>Preferred inquiry destination</li>
              <li>Email, form, Instagram, or mixed routing</li>
              <li>Any travel or response-time notes</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="section-block">
        <div class="editorial-card">
          <p class="eyebrow">What this page should communicate</p>
          <div class="editorial-grid editorial-grid-two">
            <div>
              <h2>Simple booking language</h2>
              <p class="lede">
                Keep the copy direct: invite people to share their date, session type, location, and the
                feeling they want captured.
              </p>
            </div>
            <div>
              <h2>Clear response expectations</h2>
              <p class="lede">
                Once Jack confirms timing, this page can promise the response window and any travel or
                destination notes without changing the overall site structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-banner">
        <div>
          <p class="eyebrow">Before they reach out</p>
          <h2>Visitors can review services and trust signals, then come right back here.</h2>
        </div>
        <div class="button-row">
          <a class="button-link button-link-secondary" routerLink="/services">Review services</a>
          <a class="button-link button-link-secondary" routerLink="/reviews">Read reviews</a>
        </div>
      </section>
    </section>
  `,
  styleUrl: './page-styles.scss',
})
export class InquirePageComponent {}
