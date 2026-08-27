import { Component, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { WeddingPackagesPageComponent } from './pages/wedding-packages-page.component';
import { SiteFooterComponent } from './shared/site-footer.component';
import { SiteHeaderComponent } from './shared/site-header.component';
import { IconComponent } from './shared/icon.component';

type InstagramImage = { src: string; alt: string };

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, IconComponent, SiteFooterComponent, SiteHeaderComponent, WeddingPackagesPageComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss', './layout-updates.scss'],
})
export class App implements OnInit {
  protected readonly submitted = signal(false);
  protected readonly submitting = signal(false);
  protected readonly submissionError = signal(false);
  protected readonly isWeddingPackagesPage = signal(false);
  protected readonly instagramImages = signal<InstagramImage[]>([
    { src: '/instagram/DPgqnz2DZqB.jpg', alt: 'Recent work by Jack Garcia Co.' },
    { src: '/instagram/DV8077-jatl.jpg', alt: 'Recent work by Jack Garcia Co.' },
    { src: '/instagram/DV1F6RbDXin.jpg', alt: 'Recent work by Jack Garcia Co.' },
    { src: '/instagram/DV1Dph5jTum.jpg', alt: 'Recent work by Jack Garcia Co.' },
    { src: '/instagram/DVq9DuSDU0q.jpg', alt: 'Recent work by Jack Garcia Co.' },
    { src: '/instagram/DVZMEnhjXtp.jpg', alt: 'Recent work by Jack Garcia Co.' },
  ]);
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
    service: new FormControl('Wedding', { nonNullable: true, validators: [Validators.required] }),
    date: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    location: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
    details: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(10)],
    }),
    humanCheck: new FormControl(false, {
      nonNullable: true,
      validators: [Validators.requiredTrue],
    }),
  });
  protected readonly services = [
    {
      number: '01',
      title: 'Weddings',
      description: 'Full, honest storytelling for the day you’ve waited for.',
      action: 'Explore wedding packages',
      link: '/wedding-packages',
      image: '/images/jack-garcia-wedding-service.jpg',
      alt: 'Newlyweds in front of a white chapel',
    },
    {
      number: '02',
      title: 'Couples',
      description: 'Warm, natural photographs for the season you are in.',
      action: 'View wedding packages',
      link: '/wedding-packages',
      image: '/images/jack-garcia-couples-service.jpg',
      alt: 'Couple walking through a greenhouse',
    },
    {
      number: '03',
      title: 'Lifestyle',
      description: 'Graduates, families, and milestones worth remembering.',
      action: 'View wedding packages',
      link: '/wedding-packages',
      image: '/images/jack-garcia-graduation-service.jpg',
      alt: 'Graduate standing in a wildflower field',
    },
  ];

  constructor(private readonly router: Router) {
    this.syncPageFromRoute(this.router.url);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) this.syncPageFromRoute(event.urlAfterRedirects);
    });
  }

  ngOnInit(): void {
    if (!this.isWeddingPackagesPage()) this.loadInstagramFeed();
  }

  private syncPageFromRoute(url: string): void {
    const path = url.split(/[?#]/, 1)[0].replace(/\/+$/, '') || '/';
    this.isWeddingPackagesPage.set(path === '/wedding-packages');
  }

  protected loadInstagramFeed(): void {
    fetch('/instagram/feed.json')
      .then((response) => (response.ok ? response.json() : Promise.reject(response)))
      .then((feed: unknown) => {
        if (!Array.isArray(feed)) return;
        const images = feed.filter(
          (item): item is InstagramImage =>
            typeof item?.src === 'string' && typeof item?.alt === 'string',
        );
        if (images.length) this.instagramImages.set(images.slice(0, 6));
      })
      .catch(() => undefined);
  }
  protected async sendInquiry(): Promise<void> {
    if (this.inquiryForm.invalid) {
      this.inquiryForm.markAllAsTouched();
      return;
    }
    const form = this.inquiryForm.getRawValue();
    this.submitting.set(true);
    this.submissionError.set(false);

    try {
      const response = await fetch('https://formsubmit.co/ajax/jdgimages06@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          date: form.date,
          location: form.location,
          details: form.details,
          _subject: `New ${form.service} inquiry from ${form.name}`,
          _replyto: form.email,
          _template: 'table',
          _honey: '',
        }),
      });
      const result: unknown = await response.json().catch(() => null);
      if (!response.ok || (typeof result === 'object' && result !== null && 'success' in result && result.success === false)) {
        throw new Error('Inquiry delivery failed');
      }
      this.submitted.set(true);
    } catch {
      this.submissionError.set(true);
    } finally {
      this.submitting.set(false);
    }
  }
}
