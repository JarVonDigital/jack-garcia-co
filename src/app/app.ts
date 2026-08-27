import { Component, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { WeddingPackagesPageComponent } from './pages/wedding-packages-page.component';
import { SiteFooterComponent } from './shared/site-footer.component';
import { SiteHeaderComponent } from './shared/site-header.component';

type InstagramImage = { src: string; alt: string };

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, SiteFooterComponent, SiteHeaderComponent, WeddingPackagesPageComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss', './layout-updates.scss'],
})
export class App implements OnInit {
  protected readonly submitted = signal(false);
  protected readonly isWeddingPackagesPage = signal(
    typeof window !== 'undefined' && window.location.pathname === '/wedding-packages',
  );
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
  ngOnInit(): void {
    if (!this.isWeddingPackagesPage()) this.loadInstagramFeed();
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
  protected sendInquiry(): void {
    if (this.inquiryForm.invalid) {
      this.inquiryForm.markAllAsTouched();
      return;
    }
    const form = this.inquiryForm.getRawValue();
    const lines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Date: ${form.date}`,
      `Location: ${form.location}`,
      `About their day: ${form.details}`,
    ]
      .filter(Boolean)
      .join('\n');
    window.location.href = `mailto:jdgimages06@gmail.com?subject=${encodeURIComponent(`New ${form.service} inquiry from ${form.name}`)}&body=${encodeURIComponent(lines)}`;
    this.submitted.set(true);
  }
}
