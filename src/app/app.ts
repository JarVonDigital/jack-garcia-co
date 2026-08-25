import { Component, computed, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { startWith } from 'rxjs';

type Collection = { label: string; name: string; audience: string; includes: string[]; price: string; featured: boolean };

@Component({ selector: 'app-root', imports: [ReactiveFormsModule], templateUrl: './app.html', styleUrls: ['./app.scss', './layout-updates.scss'], host: { '(window:scroll)': 'onWindowScroll()' } })
export class App {
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly submitted = signal(false);
  protected readonly inquiryForm = new FormGroup({ name: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }), email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }), phone: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(7)] }), service: new FormControl('Wedding', { nonNullable: true, validators: [Validators.required] }), date: new FormControl('', { nonNullable: true, validators: [Validators.required] }), location: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }), guests: new FormControl('', { nonNullable: true }), details: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(10)] }), humanCheck: new FormControl(false, { nonNullable: true, validators: [Validators.requiredTrue] }) });
  protected readonly selectedService = toSignal(this.inquiryForm.controls.service.valueChanges.pipe(startWith(this.inquiryForm.controls.service.value)), { initialValue: 'Wedding' });
  protected readonly isWedding = computed(() => this.selectedService() === 'Wedding');
  protected readonly services = [
    { number: '01', title: 'Weddings', description: 'Full, honest storytelling for the day you’ve waited for.', action: 'Explore wedding coverage', link: '#pricing', image: '/images/jack-garcia-wedding-service.jpg', alt: 'Newlyweds in front of a white chapel' },
    { number: '02', title: 'Couples', description: 'Warm, natural photographs for the season you are in.', action: 'Plan a session', link: '#inquire', image: '/images/jack-garcia-couples-service.jpg', alt: 'Couple walking through a greenhouse' },
    { number: '03', title: 'Lifestyle', description: 'Graduates, families, and milestones worth remembering.', action: 'Inquire for details', link: '#inquire', image: '/images/jack-garcia-graduation-service.jpg', alt: 'Graduate standing in a wildflower field' }
  ];
  protected readonly collections: Collection[] = [
    { label: 'For intimate celebrations', name: 'Mini Story', audience: 'Elopements, courthouse weddings & short celebrations', includes: ['3 consecutive hours of coverage', '3 wedding moments of your choice', 'Online gallery of high-resolution images'], price: '800', featured: false },
    { label: 'Most loved collection', name: 'Classic Story', audience: 'The complete story of your wedding day', includes: ['8 consecutive hours of coverage', '1-hour engagement session', 'Online gallery of high-resolution images'], price: '1,800', featured: true },
    { label: 'For every last detail', name: 'Editorial Story', audience: 'Full-day storytelling with extra perspective', includes: ['10 hours of wedding coverage', '1-hour engagement session', 'Second photographer included'], price: '2,600', featured: false }
  ];
  protected toggleMenu(): void { this.menuOpen.update(value => !value); }
  protected closeMenu(): void { this.menuOpen.set(false); }
  protected onWindowScroll(): void { this.scrolled.set(window.scrollY > 24); }
  protected sendInquiry(): void { if (this.inquiryForm.invalid) { this.inquiryForm.markAllAsTouched(); return; } const form = this.inquiryForm.getRawValue(); const lines = [`Name: ${form.name}`, `Email: ${form.email}`, `Phone: ${form.phone}`, `Service: ${form.service}`, `Date: ${form.date}`, `Location: ${form.location}`, form.guests ? `Guest count: ${form.guests}` : '', `About their day: ${form.details}`].filter(Boolean).join('\n'); window.location.href = `mailto:jdgimages06@gmail.com?subject=${encodeURIComponent(`New ${form.service} inquiry from ${form.name}`)}&body=${encodeURIComponent(lines)}`; this.submitted.set(true); }
}
