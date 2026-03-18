import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page">
      <section class="hero hero-split">
        <div class="editorial-card editorial-card-strong">
          <p class="eyebrow">About</p>
          <h1>Meet the photographer behind the warm, polished experience Jack Garcia Co. is known for.</h1>
          <p class="lede">
            This page is built to hold Jack's real story, his Florida base, and the way he guides people
            through portraits and wedding days with a calm editorial eye.
          </p>
          <div class="button-row">
            <a class="button-link button-link-primary" routerLink="/inquire">Inquire with Jack</a>
            <a class="button-link button-link-secondary" routerLink="/reviews">Read client reviews</a>
          </div>
        </div>

        <div class="editorial-card portrait-placeholder">
          <p class="eyebrow">Portrait area</p>
          <div class="portrait-frame">
            <img src="/instagram/profile-61411303911.jpg" alt="Portrait placeholder for Jack Garcia" />
          </div>
          <p class="placeholder-note">
            Replace this temporary image with Jack's preferred portrait or headshot once the final asset is ready.
          </p>
        </div>
      </section>

      <section class="section-block">
        <div class="section-header">
          <p class="eyebrow">Personal story</p>
          <h2>Shape the page around Jack's voice instead of generic studio language.</h2>
          <p class="lede">
            These content blocks keep the About page personal and useful now, while clearly marking the details
            still needed from Jack before launch.
          </p>
        </div>
        <div class="editorial-grid editorial-grid-two">
          <article class="editorial-card">
            <p class="testimonial-label">Story prompt</p>
            <h3>Who Jack is</h3>
            <p>
              Add a short first-person or close-third-person introduction that explains who Jack is, where he is
              based, and the kind of moments he loves documenting.
            </p>
          </article>
          <article class="editorial-card">
            <p class="testimonial-label">Experience prompt</p>
            <h3>How he photographs people</h3>
            <p>
              Use this section for Jack's approach to direction, pacing, and helping couples and families feel at
              ease in front of the camera.
            </p>
          </article>
        </div>
      </section>

      <section class="section-block">
        <div class="editorial-grid editorial-grid-three">
          <article class="editorial-card">
            <p class="testimonial-label">What to include</p>
            <h3>Background details</h3>
            <ul class="stack-list">
              <li>Home base in Florida and travel availability</li>
              <li>How long Jack has been photographing professionally</li>
              <li>What first drew him to weddings and portraits</li>
            </ul>
          </article>
          <article class="editorial-card">
            <p class="testimonial-label">Client experience</p>
            <h3>Approach and values</h3>
            <ul class="stack-list">
              <li>How Jack keeps sessions relaxed and guided</li>
              <li>What makes the work feel warm, polished, and editorial</li>
              <li>What clients can expect before, during, and after a session</li>
            </ul>
          </article>
          <article class="editorial-card">
            <p class="testimonial-label">Still needed</p>
            <h3>Missing final content</h3>
            <ul class="stack-list">
              <li>Final portrait or headshot selection</li>
              <li>Personal background copy in Jack's voice</li>
              <li>Any short facts, locations, or specialties he wants highlighted</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="cta-banner">
        <div>
          <p class="eyebrow">Next step</p>
          <h2>Let Jack's story build trust, then guide visitors toward reaching out.</h2>
        </div>
        <div class="button-row">
          <a class="button-link button-link-secondary" routerLink="/reviews">View reviews</a>
          <a class="button-link button-link-primary" routerLink="/inquire">Inquire today</a>
        </div>
      </section>
    </section>
  `,
  styleUrl: './page-styles.scss',
})
export class AboutPageComponent {}
