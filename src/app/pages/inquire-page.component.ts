import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page">
      <section class="page-intro editorial-card editorial-card-strong">
        <p class="eyebrow">Inquire</p>
        <h1>Start the conversation with a clear, focused inquiry.</h1>
        <p class="lede">
          Share the essentials and Jack can quickly recommend coverage, availability, and next steps based on your
          timeline and priorities.
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
            <h2>What happens after inquiry</h2>
            <ul class="stack-list">
              <li>Availability and package guidance</li>
              <li>Timeline support and planning notes</li>
              <li>Booking and retainer details</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="section-block">
        <div class="editorial-card">
          <p class="eyebrow">Communication standard</p>
          <div class="editorial-grid editorial-grid-two">
            <div>
              <h2>Simple, direct details</h2>
              <p class="lede">
                Clear details at the start help Jack build an accurate proposal without multiple rounds of follow-up.
              </p>
            </div>
            <div>
              <h2>Reliable response expectations</h2>
              <p class="lede">
                Clients can expect thoughtful guidance on coverage, schedule, and next steps tailored to their event.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-banner">
        <div>
          <p class="eyebrow">Need context first</p>
          <h2>Review services and client feedback, then return to inquire.</h2>
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
