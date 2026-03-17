import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, DestroyRef, ElementRef, QueryList, ViewChildren, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { TimelineModule } from 'primeng/timeline';

interface NavItem {
  label: string;
  href: string;
}

interface Metric {
  label: string;
  value: string;
}

interface CollectionHighlight {
  title: string;
  description: string;
  details: string;
  price: string;
}

interface PricedService {
  name: string;
  price: string;
}

interface ServiceGroup {
  label: string;
  summary: string;
  items: PricedService[];
}

interface GalleryFrame {
  eyebrow: string;
  title: string;
  caption: string;
  image: string;
  alt: string;
  objectPosition?: string;
  href?: string;
}

interface ProcessStep {
  phase: string;
  step: string;
  title: string;
  description: string;
}

interface ExperienceNote {
  title: string;
  body: string;
  accent: string;
}

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccordionModule,
    ButtonModule,
    CarouselModule,
    FloatLabelModule,
    InputTextModule,
    TextareaModule,
    TimelineModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  @ViewChildren('revealBlock') private readonly revealBlocks?: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('portfolioItem') private readonly portfolioItems?: QueryList<ElementRef<HTMLElement>>;

  private readonly formBuilder = inject(FormBuilder);
  private readonly destroyRef = inject(DestroyRef);
  private readonly reducedMotionQuery =
    typeof window === 'undefined' ? null : window.matchMedia('(prefers-reduced-motion: reduce)');
  protected readonly prefersReducedMotion = signal(this.reducedMotionQuery?.matches ?? false);

  protected readonly navItems: NavItem[] = [
    { label: 'Services', href: 'services' },
    { label: 'Portfolio', href: 'portfolio' },
    { label: 'Journal', href: 'journal' },
    { label: 'About', href: 'about' },
    { label: 'Process', href: 'process' },
    { label: 'Inquire', href: 'contact' }
  ];

  protected readonly heroMetrics: Metric[] = [
    { label: 'Wedding collections', value: 'From $800' },
    { label: 'Portrait sessions', value: 'From $150' },
    { label: 'Inquiry flow', value: 'Short, mobile-friendly, and DM-ready' }
  ];

  protected readonly collectionHighlights: CollectionHighlight[] = [
    {
      title: 'Editorial wedding coverage',
      description: 'A warm, guided experience with enough structure to keep the day moving and enough softness to keep it personal.',
      details: 'Coverage can scale from smaller keepsake collections to full-day storytelling with add-on moments folded in.',
      price: 'Starting at $800'
    },
    {
      title: 'Milestone portraits',
      description: 'Graduation, maternity, family, and couples sessions shaped for clients who want confident posing without looking over-directed.',
      details: 'These sessions stay approachable, polished, and quick to understand on a small screen.',
      price: 'Starting at $180'
    },
    {
      title: 'Brand and motion stories',
      description: 'Branding and automotive shoots get the same editorial pacing, with tighter crops and cleaner calls to action.',
      details: 'The visual language flexes from keepsake work into campaign-ready selects without feeling like a separate brand.',
      price: 'Starting at $150'
    }
  ];

  protected readonly serviceGroups: ServiceGroup[] = [
    {
      label: 'Portrait and milestone sessions',
      summary: 'Flexible coverage for personal milestones with polished direction from start to finish.',
      items: [
        { name: 'Graduation', price: '$200' },
        { name: 'Portraits', price: '$180' },
        { name: 'Family', price: '$250' },
        { name: 'Couple', price: '$200' },
        { name: 'Engagement', price: '$225' },
        { name: 'Maternity', price: '$200' },
        { name: 'Baby / newborn', price: '$300' }
      ]
    },
    {
      label: 'Brand and lifestyle work',
      summary: 'Sessions shaped for entrepreneurs, makers, and visual-first brands that need scroll-stopping selects.',
      items: [
        { name: 'Branding', price: '$200' },
        { name: 'Automotive', price: '$150' }
      ]
    },
    {
      label: 'Wedding collections',
      summary: 'The existing collection boards already point toward a refined wedding offering, so the page keeps that lane elegant and easy to scan.',
      items: [
        { name: 'Mini story collection', price: 'Starting at $800' },
        { name: 'Classic story collection', price: 'Starting at $1,800' },
        { name: 'Editorial story collection', price: 'Starting at $2,600' },
        { name: 'Base coverage', price: '$400' },
        { name: 'Add-on wedding moments', price: '$200 each' }
      ]
    }
  ];

  protected readonly portfolioFrames: GalleryFrame[] = [
    {
      eyebrow: 'Wedding direction',
      title: 'Ceremony atmosphere with fashion energy',
      caption: 'The larger frame sets the tone: elegant greens, soft texture, and enough negative space to feel calm instead of crowded.',
      image: '/Services/service-image.jpeg',
      alt: 'Jack Garcia wedding mood board with soft editorial styling',
      objectPosition: '50% 12%'
    },
    {
      eyebrow: 'Detail studies',
      title: 'Texture that slows the scroll',
      caption: 'Close crops give florals, paper goods, and small keepsakes a stronger role in the visual story.',
      image: '/Services/service-image-2.jpeg',
      alt: 'Jack Garcia detail board with florals and layered textures',
      objectPosition: '48% 18%'
    },
    {
      eyebrow: 'Portrait pacing',
      title: 'Guided moments that still feel relaxed',
      caption: 'The mosaic leaves space for portrait-led storytelling without pushing the layout into a rigid portfolio grid.',
      image: '/Services/service-image.jpeg',
      alt: 'Editorial portrait-inspired crop from the Jack Garcia collection board',
      objectPosition: '44% 32%'
    },
    {
      eyebrow: 'Brand polish',
      title: 'Crops that can flex into lifestyle work',
      caption: 'Tighter framing helps the same art direction stretch into brand and motion projects without feeling disconnected.',
      image: '/Services/service-image-2.jpeg',
      alt: 'Brand-ready crop from the Jack Garcia detail board',
      objectPosition: '52% 46%'
    }
  ];

  protected readonly heroFrames: GalleryFrame[] = this.portfolioFrames.slice(1, 3);

  protected readonly socialFrames: GalleryFrame[] = [
    {
      eyebrow: 'Feed slot 01',
      title: 'Warm portrait energy',
      caption: 'This layout slot is ready for a fresh Instagram export whenever you want to swap in a newer portrait image.',
      image: '/Services/service-image.jpeg',
      alt: 'Placeholder portrait-style frame for the Instagram section',
      href: 'https://www.instagram.com/jackgarcia.co/',
      objectPosition: '42% 28%'
    },
    {
      eyebrow: 'Feed slot 02',
      title: 'Detail-driven still life',
      caption: 'A taller card keeps the page visually dense on mobile, even before live social images are dropped in.',
      image: '/Services/service-image-2.jpeg',
      alt: 'Placeholder detail frame for the Instagram section',
      href: 'https://www.instagram.com/jackgarcia.co/',
      objectPosition: '52% 14%'
    },
    {
      eyebrow: 'Feed slot 03',
      title: 'Motion and couples crop',
      caption: 'This smaller tile is tuned for a fast mobile glance and can be replaced without touching the section styling.',
      image: '/Services/service-image.jpeg',
      alt: 'Placeholder movement-focused frame for the Instagram section',
      href: 'https://www.instagram.com/jackgarcia.co/',
      objectPosition: '58% 42%'
    },
    {
      eyebrow: 'Feed slot 04',
      title: 'Brand or tablescape highlight',
      caption: 'The grid stays flexible enough for wedding detail, brand texture, or a portrait crop from the latest post.',
      image: '/Services/service-image-2.jpeg',
      alt: 'Placeholder brand-style frame for the Instagram section',
      href: 'https://www.instagram.com/jackgarcia.co/',
      objectPosition: '45% 62%'
    },
    {
      eyebrow: 'Feed slot 05',
      title: 'Ceremony color study',
      caption: 'A square crop lets bouquet tones, fabric texture, and skin tone stay balanced like a real feed post.',
      image: '/Services/service-image.jpeg',
      alt: 'Placeholder ceremony-inspired frame for the Instagram section',
      href: 'https://www.instagram.com/jackgarcia.co/',
      objectPosition: '46% 18%'
    },
    {
      eyebrow: 'Feed slot 06',
      title: 'Quiet in-between moment',
      caption: 'The sixth tile rounds the mock feed into two full rows so the section lands closer to Instagram at a glance.',
      image: '/Services/service-image-2.jpeg',
      alt: 'Placeholder candid-inspired frame for the Instagram section',
      href: 'https://www.instagram.com/jackgarcia.co/',
      objectPosition: '58% 36%'
    }
  ];

  protected readonly trustNotes: ExperienceNote[] = [
    {
      title: 'Direction that never feels stiff',
      body: 'Every section reinforces the same promise: clear guidance, relaxed pacing, and room for genuine emotion.',
      accent: 'Guided'
    },
    {
      title: 'A stronger visual system without a bulky build',
      body: 'The styling now uses one cohesive set of panel, spacing, and color tokens so future edits stay quick and predictable.',
      accent: 'System'
    },
    {
      title: 'A clear handoff to booking',
      body: 'The inquiry form still turns the page into a usable booking tool by generating a clean brief clients can paste into a DM or email.',
      accent: 'Actionable'
    }
  ];

  protected readonly processSteps: ProcessStep[] = [
    {
      phase: '01',
      step: 'Inquire',
      title: 'Share the kind of story you want to tell',
      description: 'The contact section keeps the first step simple: session type, a reply email, and a few lines about the mood you are after.'
    },
    {
      phase: '02',
      step: 'Shape',
      title: 'Build coverage around the moments that matter most',
      description: 'Wedding clients can scale into fuller collections, while portraits and brand sessions stay focused and easy to customize.'
    },
    {
      phase: '03',
      step: 'Photograph',
      title: 'Move through the shoot with calm direction',
      description: 'The brand lane stays polished and editorial, but the experience is still built around helping people feel comfortable in front of the camera.'
    },
    {
      phase: '04',
      step: 'Deliver',
      title: 'Turn lived moments into keepsake images',
      description: 'The page ends with a lighter-friction inquiry path so the visual momentum carries cleanly into the next message.'
    }
  ];

  protected readonly experienceNotes: ExperienceNote[] = [
    {
      title: 'A softer luxury tone',
      body: 'The refreshed styling feels more collected and bespoke, without pushing the brand into something cold or inaccessible.',
      accent: 'Refined'
    },
    {
      title: 'Mobile layouts that still feel designed',
      body: 'Panels stack cleanly, image cards reshape without collapsing, and the inquiry path stays short enough to finish one-handed.',
      accent: 'Responsive'
    },
    {
      title: 'Motion that supports the photos',
      body: 'GSAP reveals stay subtle, trigger once, and step aside entirely when reduced motion is preferred.',
      accent: 'Accessible'
    }
  ];

  protected readonly inquiryForm = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    sessionType: ['', Validators.required],
    vision: ['', [Validators.required, Validators.minLength(12)]]
  });

  protected readonly submitted = signal(false);
  protected readonly inquiryDraft = signal('');
  protected readonly copyFeedback = signal('');
  protected readonly activePortfolioIndex = signal(0);
  protected readonly portfolioTransitionDirection = signal<'up' | 'down'>('down');
  protected readonly activePortfolioTransitionKey = computed(
    () => `${this.activePortfolioIndex()}-${this.portfolioTransitionDirection()}`
  );
  protected readonly activePortfolioFrame = computed(() => this.portfolioFrames[this.activePortfolioIndex()] ?? this.portfolioFrames[0]);

  private setActivePortfolioIndex(index: number, direction: 'up' | 'down'): void {
    if (index === this.activePortfolioIndex()) {
      return;
    }

    this.portfolioTransitionDirection.set(direction);
    this.activePortfolioIndex.set(index);
  }

  protected controlInvalid(controlName: string): boolean {
    const control = this.inquiryForm.get(controlName);
    return Boolean(control && control.invalid && (control.touched || this.submitted()));
  }

  protected scrollToId(targetId: string): void {
    if (typeof document === 'undefined' || typeof window === 'undefined') {
      return;
    }

    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    const topbarHeight = document.querySelector<HTMLElement>('.topbar')?.getBoundingClientRect().height ?? 0;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - topbarHeight - 24;

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: 'smooth'
    });
  }

  protected openInstagram(): void {
    if (typeof window === 'undefined') {
      return;
    }

    window.open('https://www.instagram.com/jackgarcia.co/', '_blank', 'noopener,noreferrer');
  }

  protected submitInquiry(): void {
    this.submitted.set(true);
    this.copyFeedback.set('');

    if (this.inquiryForm.invalid) {
      this.inquiryForm.markAllAsTouched();
      return;
    }

    const { name, email, sessionType, vision } = this.inquiryForm.getRawValue();

    this.inquiryDraft.set(
      [
        'Jack Garcia & Co. inquiry',
        `Name: ${name}`,
        `Email: ${email}`,
        `Session type: ${sessionType}`,
        `Vision: ${vision}`
      ].join('\n')
    );

    void this.copyInquiry();
  }

  protected async copyInquiry(): Promise<void> {
    const inquiryDraft = this.inquiryDraft();

    if (!inquiryDraft) {
      return;
    }

    if (typeof navigator === 'undefined' || !navigator.clipboard) {
      this.copyFeedback.set('Select the brief below and paste it into your message to Jack.');
      return;
    }

    try {
      await navigator.clipboard.writeText(inquiryDraft);
      this.copyFeedback.set('Inquiry brief copied. Paste it into a DM or email to keep momentum going.');
    } catch {
      this.copyFeedback.set('Copy was blocked, but the brief is ready below for manual copy.');
    }
  }

  async ngAfterViewInit(): Promise<void> {
    if (typeof window === 'undefined' || /jsdom/i.test(window.navigator.userAgent)) {
      return;
    }

    const reducedMotionQuery = this.reducedMotionQuery;

    if (reducedMotionQuery) {
      const syncReducedMotionPreference = (event?: MediaQueryListEvent): void => {
        this.prefersReducedMotion.set(event?.matches ?? reducedMotionQuery.matches);
      };

      syncReducedMotionPreference();

      if (typeof reducedMotionQuery.addEventListener === 'function') {
        reducedMotionQuery.addEventListener('change', syncReducedMotionPreference);
        this.destroyRef.onDestroy(() => reducedMotionQuery.removeEventListener('change', syncReducedMotionPreference));
      } else {
        reducedMotionQuery.addListener(syncReducedMotionPreference);
        this.destroyRef.onDestroy(() => reducedMotionQuery.removeListener(syncReducedMotionPreference));
      }
    }

    if (this.prefersReducedMotion()) {
      return;
    }

    const blocks = this.revealBlocks?.toArray().map((block) => block.nativeElement) ?? [];
    const portfolioItems = this.portfolioItems?.toArray().map((item) => item.nativeElement) ?? [];

    if (!blocks.length) {
      return;
    }

    const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);

    gsap.registerPlugin(ScrollTrigger);

    const compactViewport = window.matchMedia('(max-width: 768px)').matches;

    blocks.forEach((block, index) => {
      gsap.from(block, {
        opacity: 0,
        y: compactViewport ? 28 : 52,
        duration: compactViewport ? 0.65 : 0.9,
        ease: 'power2.out',
        delay: (index % 3) * 0.05,
        scrollTrigger: {
          trigger: block,
          start: compactViewport ? 'top 92%' : 'top 84%',
          once: true
        }
      });
    });

    portfolioItems.forEach((item, index) => {
      ScrollTrigger.create({
        trigger: item,
        start: compactViewport ? 'top 72%' : 'top center',
        end: compactViewport ? 'bottom 45%' : 'bottom center',
        onEnter: () => this.setActivePortfolioIndex(index, 'down'),
        onEnterBack: () => this.setActivePortfolioIndex(index, 'up')
      });
    });

    this.destroyRef.onDestroy(() => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    });
  }
}
