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
            Based in Florida, Jack photographs weddings and portraits with an editorial approach that keeps people
            relaxed, present, and fully seen throughout the day.
          </p>
          <div class="button-row">
            <a class="button-link button-link-primary" routerLink="/inquire">Inquire with Jack</a>
            <a class="button-link button-link-secondary" routerLink="/reviews">Read client reviews</a>
          </div>
        </div>

        <div class="editorial-card portrait-placeholder">
          <p class="eyebrow">Photographer</p>
          <div class="portrait-frame">
            <img src="/instagram/profile-61411303911.jpg" alt="Portrait of photographer Jack Garcia" />
          </div>
          <p class="placeholder-note">
            Jack works with couples, families, and brands who want direction that feels natural and photographs that
            hold both style and emotion.
          </p>
        </div>
      </section>

      <section class="section-block">
        <div class="section-header">
          <p class="eyebrow">Approach</p>
          <h2>A polished process built around comfort, clarity, and strong storytelling.</h2>
          <p class="lede">
            From first inquiry to gallery delivery, Jack keeps communication clear and the pace calm so clients can
            focus on the moments that matter.
          </p>
        </div>
        <div class="editorial-grid editorial-grid-two">
          <article class="editorial-card">
            <p class="testimonial-label">Before the shoot</p>
            <h3>Planning with intention</h3>
            <p>
              Clients receive guidance on timeline, wardrobe, location, and session flow so the day runs smoothly and
              images feel cohesive from start to finish.
            </p>
          </article>
          <article class="editorial-card">
            <p class="testimonial-label">During the shoot</p>
            <h3>Direction without pressure</h3>
            <p>
              Jack blends editorial composition with real moments, giving clients clear cues while preserving the
              emotion and energy of the day.
            </p>
          </article>
        </div>
      </section>

      <section class="section-block">
        <div class="editorial-grid editorial-grid-three">
          <article class="editorial-card">
            <p class="testimonial-label">Coverage</p>
            <h3>Where Jack works</h3>
            <ul class="stack-list">
              <li>Florida-based wedding and portrait photography</li>
              <li>Travel-ready for destination sessions and events</li>
              <li>Coverage tailored to timelines and priorities</li>
            </ul>
          </article>
          <article class="editorial-card">
            <p class="testimonial-label">Experience</p>
            <h3>What clients can expect</h3>
            <ul class="stack-list">
              <li>Prompt communication from inquiry through delivery</li>
              <li>Natural posing guidance that avoids stiff results</li>
              <li>Consistent editing with a warm editorial finish</li>
            </ul>
          </article>
          <article class="editorial-card">
            <p class="testimonial-label">Specialties</p>
            <h3>Signature sessions</h3>
            <ul class="stack-list">
              <li>Wedding days and engagement sessions</li>
              <li>Family, graduation, and milestone portraits</li>
              <li>Select brand and lifestyle storytelling projects</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="cta-banner">
        <div>
          <p class="eyebrow">Let&apos;s connect</p>
          <h2>If this approach fits your vision, start with an inquiry.</h2>
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
