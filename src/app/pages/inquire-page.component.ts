import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  template: `
    <section class="page">
      <section class="hero hero-split inquire-hero">
        <div class="editorial-card editorial-card-strong inquire-hero-copy">
          <p class="eyebrow">Inquire</p>
          <h1>Share what you are planning and receive a thoughtful next step.</h1>
          <p class="lede">
            Whether you are planning a wedding weekend, engagement session, family portraits, or
            graduation photos, this is the place to share your date, location, and the feeling you
            want your gallery to hold.
          </p>

          <div class="inquire-snapshot">
            <div>
              <p class="testimonial-label">What to expect</p>
              <strong>A personal reply from Jack</strong>
            </div>
            <div>
              <p class="testimonial-label">Based in</p>
              <strong>Florida, available for travel</strong>
            </div>
            <div>
              <p class="testimonial-label">Best fit</p>
              <strong>Weddings, portraits, and milestone stories</strong>
            </div>
          </div>
        </div>

        <article class="editorial-card inquire-process">
          <p class="eyebrow">What happens next</p>
          <h2>A calm, clear process from first message to confirmed plans.</h2>
          <ol class="process-list">
            <li>
              <strong>Share the essentials.</strong>
              <span>Include your date, location, and the kind of coverage you need.</span>
            </li>
            <li>
              <strong>Receive tailored guidance.</strong>
              <span
                >Jack follows up with availability, collection recommendations, and next
                steps.</span
              >
            </li>
            <li>
              <strong>Move forward with confidence.</strong>
              <span
                >Once the fit is right, you will receive booking details and planning support.</span
              >
            </li>
          </ol>
          <p class="inquire-aside">
            If your date is still flexible, share the season or timeframe you are considering and
            Jack can guide you from there.
          </p>
        </article>
      </section>

      <section class="section-block">
        <div class="inquiry-layout">
          <div class="editorial-card inquiry-form-card">
            <div class="section-header inquiry-form-header">
              <p class="eyebrow">Start your inquiry</p>
              <h2>Share the details that matter most.</h2>
              <p class="lede">
                A little context goes a long way. The more you can share here, the easier it is to
                recommend coverage, timing, and next steps that fit naturally.
              </p>
            </div>

            <form
              class="inquiry-form"
              [formGroup]="inquiryForm"
              novalidate
              (ngSubmit)="sendInquiry()"
            >
              <p class="required-note">
                Fields marked <span aria-hidden="true">*</span> are required.
              </p>
              <label class="honeypot-field" aria-hidden="true">
                Leave this field empty
                <input formControlName="website" tabindex="-1" autocomplete="off" />
              </label>

              <div class="field-grid">
                <label class="field-group">
                  <span>Full name <b aria-hidden="true">*</b></span>
                  <input
                    class="text-input"
                    type="text"
                    formControlName="name"
                    autocomplete="name"
                    required
                  />
                </label>

                <label class="field-group">
                  <span>Email address <b aria-hidden="true">*</b></span>
                  <input
                    class="text-input"
                    type="email"
                    formControlName="email"
                    autocomplete="email"
                    required
                  />
                </label>

                <label class="field-group">
                  <span>Phone number <b aria-hidden="true">*</b></span>
                  <input
                    class="text-input"
                    type="tel"
                    formControlName="phone"
                    autocomplete="tel"
                    required
                  />
                </label>

                <label class="field-group">
                  <span>Service type <b aria-hidden="true">*</b></span>
                  <select class="text-input" formControlName="service" required>
                    <option value="" disabled>Select one</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Couples">Couples</option>
                    <option value="Families">Families</option>
                    <option value="Graduation">Graduation</option>
                    <option value="Brand or lifestyle">Brand or lifestyle</option>
                    <option value="Other">Other</option>
                  </select>
                </label>

                <label class="field-group">
                  <span>Date or timeframe <b aria-hidden="true">*</b></span>
                  <input
                    class="text-input"
                    type="text"
                    formControlName="date"
                    autocomplete="off"
                    required
                  />
                </label>

                <label class="field-group">
                  <span>Location or venue <b aria-hidden="true">*</b></span>
                  <input
                    class="text-input"
                    type="text"
                    formControlName="location"
                    autocomplete="address-level2"
                    required
                  />
                </label>

                <label class="field-group">
                  <span>Estimated coverage or budget range</span>
                  <select class="text-input" formControlName="budget">
                    <option value="">Select one</option>
                    <option value="Under $500">Under $500</option>
                    <option value="$500-$1,200">$500-$1,200</option>
                    <option value="$1,200-$2,500">$1,200-$2,500</option>
                    <option value="$2,500+">$2,500+</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </label>

                <label class="field-group">
                  <span>How did you hear about Jack?</span>
                  <input
                    class="text-input"
                    type="text"
                    formControlName="referralSource"
                    autocomplete="off"
                  />
                </label>
              </div>

              <label class="field-group field-group-full">
                <span>What are you planning? <b aria-hidden="true">*</b></span>
                <textarea
                  class="text-input textarea-input"
                  formControlName="details"
                  rows="6"
                  required
                ></textarea>
              </label>

              <label class="field-group field-group-full">
                <span>Anything else Jack should know?</span>
                <textarea
                  class="text-input textarea-input textarea-compact"
                  formControlName="notes"
                  rows="4"
                ></textarea>
              </label>

              @if (inquiryForm.touched && inquiryForm.invalid) {
                <p class="submission-message submission-error" role="alert">
                  Please complete the required fields and enter a valid email address.
                </p>
              }

              @if (submitted()) {
                <p class="submission-message submission-success" role="status">
                  Your inquiry has been sent. Thank you — Jack will be in touch soon.
                </p>
              }

              @if (submissionError()) {
                <p class="submission-message submission-error" role="alert">
                  Your inquiry could not be sent. Please try again or email
                  <a href="mailto:jdgimages06@gmail.com">jdgimages06@gmail.com</a>.
                </p>
              }

              <div class="form-footer">
                <p class="form-note">
                  Helpful details include the atmosphere you want, any portrait priorities, family
                  dynamics to be aware of, and anything that would make the experience feel easy and
                  personal.
                </p>
                <button
                  class="button-link button-link-primary form-submit"
                  type="submit"
                  [disabled]="submitting()"
                >
                  @if (submitting()) {
                    Sending inquiry…
                  } @else {
                    Send inquiry
                  }
                </button>
              </div>
            </form>
          </div>

          <div class="sidebar-stack">
            <article class="editorial-card editorial-card-muted info-card">
              <p class="eyebrow">Helpful details</p>
              <h3>Strong inquiries usually include these basics.</h3>
              <ul class="stack-list detail-list">
                <li>The event type and who is being photographed</li>
                <li>Your confirmed date or the season you are considering</li>
                <li>The city, venue, or destination involved</li>
                <li>Any must-have moments, portraits, or timeline priorities</li>
              </ul>
            </article>

            <article class="editorial-card info-card">
              <p class="eyebrow">Availability</p>
              <h3>Planning ahead always helps.</h3>
              <p>
                Weddings and destination dates tend to book furthest in advance, while portrait
                sessions often have more flexibility when schedules align.
              </p>
            </article>

            <article class="editorial-card info-card">
              <p class="eyebrow">Need context first</p>
              <h3>Not sure which collection fits your plans?</h3>
              <p>
                That is completely fine. Share the vision you have so far and Jack can recommend the
                coverage level that makes the most sense.
              </p>
              <div class="button-row">
                <a class="button-link button-link-secondary" routerLink="/" fragment="services"
                  >Review services</a
                >
                <a class="button-link button-link-secondary" routerLink="/" fragment="testimonials"
                  >Read reviews</a
                >
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="cta-banner">
        <div>
          <p class="eyebrow">Still exploring</p>
          <h2>
            Review services and client feedback, then come back when you are ready to reach out.
          </h2>
        </div>
        <div class="button-row">
          <a class="button-link button-link-secondary" routerLink="/" fragment="services"
            >Review services</a
          >
          <a class="button-link button-link-secondary" routerLink="/" fragment="testimonials"
            >Read reviews</a
          >
        </div>
      </section>
    </section>
  `,
  styleUrl: './page-styles.scss',
  styles: [
    `
      .inquire-hero {
        align-items: stretch;
      }

      .inquire-hero-copy,
      .inquire-process,
      .inquiry-form-card,
      .info-card {
        align-content: start;
      }

      .inquire-snapshot {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
        margin-top: 1rem;
        padding-top: 1.25rem;
        border-top: 1px solid rgba(57, 66, 51, 0.12);
      }

      .inquire-snapshot > div {
        display: grid;
        gap: 0.35rem;
      }

      .inquire-snapshot strong {
        color: var(--olive-950);
        font-size: 1rem;
        line-height: 1.5;
      }

      .inquire-process {
        background:
          linear-gradient(180deg, rgba(255, 255, 255, 0.34), transparent 34%),
          linear-gradient(135deg, rgba(228, 232, 220, 0.88), rgba(248, 245, 238, 0.96));
      }

      .process-list {
        display: grid;
        gap: 1rem;
        margin: 0;
        padding: 0;
        list-style: none;
        counter-reset: inquiry-step;
      }

      .process-list li {
        display: grid;
        gap: 0.3rem;
        padding-left: 3rem;
        position: relative;
      }

      .process-list li::before {
        content: counter(inquiry-step, decimal-leading-zero);
        counter-increment: inquiry-step;
        position: absolute;
        left: 0;
        top: 0;
        color: var(--olive-700);
        font-size: 0.82rem;
        font-weight: 700;
        letter-spacing: 0.18em;
      }

      .process-list strong {
        color: var(--olive-950);
        font-family: var(--font-display);
        font-size: 1.2rem;
        font-weight: 600;
        line-height: 1.1;
      }

      .process-list span,
      .inquire-aside,
      .info-card p {
        color: var(--ink-soft);
        line-height: 1.8;
      }

      .inquire-aside {
        margin: 0;
        padding-top: 1rem;
        border-top: 1px solid rgba(57, 66, 51, 0.12);
      }

      .inquiry-layout {
        display: grid;
        grid-template-columns: minmax(0, 1.3fr) minmax(18rem, 0.85fr);
        gap: clamp(1rem, 2vw, 1.5rem);
        align-items: start;
      }

      .inquiry-form-card {
        gap: 1.5rem;
        background:
          radial-gradient(circle at top right, rgba(228, 232, 220, 0.9), transparent 26%),
          linear-gradient(180deg, rgba(255, 255, 255, 0.55), transparent 30%), var(--paper-soft);
      }

      .inquiry-form-header {
        margin-bottom: 0;
      }

      .inquiry-form {
        display: grid;
        gap: 1rem;
      }

      .required-note {
        margin: 0;
        color: var(--ink-soft);
        font-size: 0.82rem;
      }

      .required-note span,
      .field-group b {
        color: #8a4435;
      }

      .honeypot-field {
        position: absolute;
        left: -10000px;
        width: 1px;
        height: 1px;
        overflow: hidden;
      }

      .field-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1rem;
      }

      .field-group {
        display: grid;
        gap: 0.45rem;
        color: var(--olive-950);
        font-size: 0.92rem;
        font-weight: 600;
        line-height: 1.4;
      }

      .field-group-full {
        grid-column: 1 / -1;
      }

      .text-input {
        width: 100%;
        min-height: 3.25rem;
        padding: 0.9rem 1rem;
        border: 1px solid rgba(57, 66, 51, 0.18);
        border-radius: 0;
        background: rgba(255, 255, 255, 0.74);
        color: var(--ink);
        font: inherit;
        transition:
          border-color 180ms ease,
          box-shadow 180ms ease,
          background-color 180ms ease;
        appearance: none;
      }

      .text-input:hover {
        border-color: rgba(57, 66, 51, 0.32);
      }

      .text-input:focus-visible {
        outline: none;
        border-color: var(--olive-700);
        box-shadow: 0 0 0 3px rgba(88, 101, 77, 0.14);
        background: rgba(255, 255, 255, 0.92);
      }

      .text-input.ng-invalid.ng-touched {
        border-color: #9d4e3c;
      }

      .textarea-input {
        min-height: 10rem;
        resize: vertical;
      }

      .textarea-compact {
        min-height: 8rem;
      }

      .form-footer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 1rem;
        align-items: center;
        padding-top: 0.5rem;
      }

      .form-note {
        flex: 1 1 18rem;
        margin: 0;
        color: var(--ink-soft);
        line-height: 1.8;
      }

      .form-submit {
        cursor: pointer;
        width: auto;
        font-family: inherit;
      }

      .form-submit:disabled {
        cursor: wait;
        opacity: 0.68;
      }

      .submission-message {
        margin: 0;
        padding: 0.9rem 1rem;
        border: 1px solid currentColor;
        line-height: 1.6;
      }

      .submission-error {
        color: #783f32;
        background: rgba(180, 91, 69, 0.08);
      }

      .submission-success {
        color: var(--olive-800);
        background: rgba(88, 101, 77, 0.1);
      }

      .sidebar-stack {
        display: grid;
        gap: clamp(1rem, 1.5vw, 1.25rem);
      }

      .detail-list {
        max-width: none;
      }

      @media (max-width: 900px) {
        .inquire-snapshot,
        .inquiry-layout,
        .field-grid {
          grid-template-columns: 1fr;
        }

        .process-list li {
          padding-left: 2.5rem;
        }

        .form-footer {
          align-items: stretch;
        }

        .form-submit {
          width: 100%;
        }
      }
    `,
  ],
})
export class InquirePageComponent {
  protected readonly submitted = signal(false);
  protected readonly submitting = signal(false);
  protected readonly submissionError = signal(false);
  protected readonly inquiryForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    phone: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(7)],
    }),
    service: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    date: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    location: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
    budget: new FormControl('', { nonNullable: true }),
    referralSource: new FormControl('', { nonNullable: true }),
    details: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(10)],
    }),
    notes: new FormControl('', { nonNullable: true }),
    website: new FormControl('', { nonNullable: true }),
  });

  protected async sendInquiry(): Promise<void> {
    this.submitted.set(false);
    this.submissionError.set(false);

    if (this.inquiryForm.invalid) {
      this.inquiryForm.markAllAsTouched();
      return;
    }

    const form = this.inquiryForm.getRawValue();
    if (form.website) {
      this.submitted.set(true);
      this.inquiryForm.reset();
      return;
    }

    this.submitting.set(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/jdgimages06@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || 'Not provided',
          service: form.service,
          date: form.date,
          location: form.location,
          budget: form.budget || 'Not provided',
          referral_source: form.referralSource || 'Not provided',
          details: form.details,
          notes: form.notes || 'None',
          _subject: `New ${form.service} inquiry from ${form.name}`,
          _replyto: form.email,
          _template: 'table',
          _honey: form.website,
        }),
      });
      const result: unknown = await response.json().catch(() => null);
      const rejectedByProvider =
        typeof result === 'object' &&
        result !== null &&
        'success' in result &&
        result.success === false;

      if (!response.ok || rejectedByProvider) throw new Error('Inquiry delivery failed');

      this.submitted.set(true);
      this.inquiryForm.reset();
    } catch {
      this.submissionError.set(true);
    } finally {
      this.submitting.set(false);
    }
  }
}
