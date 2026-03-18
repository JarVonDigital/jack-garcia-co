import { AfterViewInit, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

interface NavItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'Inquire', path: '/inquire' },
  ];

  protected readonly isNavDrawerOpen = signal(false);
  protected readonly currentYear = new Date().getFullYear();
  protected readonly menuLabel = computed(() =>
    this.isNavDrawerOpen() ? 'Close navigation menu' : 'Open navigation menu',
  );

  protected toggleNavDrawer(): void {
    this.isNavDrawerOpen.update((value) => !value);
  }

  protected closeNavDrawer(): void {
    this.isNavDrawerOpen.set(false);
  }

  protected scrollToTop(): void {
    this.closeNavDrawer();
    this.document.defaultView?.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngAfterViewInit(): void {
    const view = this.document.defaultView;
    if (!view) {
      return;
    }

    const reducedMotionQuery = view.matchMedia('(prefers-reduced-motion: reduce)');
    const useStaticReveal = reducedMotionQuery.matches;

    if (useStaticReveal || !('IntersectionObserver' in view)) {
      this.markAllVisible();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    );

    const wireReveals = (): void => {
      const targets = this.document.querySelectorAll<HTMLElement>(
        '.page .hero, .page .page-intro, .page .section-block, .page .editorial-card, .page .cta-banner',
      );

      targets.forEach((target, index) => {
        target.classList.add('reveal-on-scroll');
        target.style.setProperty('--reveal-delay', `${Math.min(index * 35, 210)}ms`);
        observer.observe(target);
      });
    };

    wireReveals();

    const navigationSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        view.requestAnimationFrame(() => wireReveals());
      });

    this.destroyRef.onDestroy(() => {
      observer.disconnect();
      navigationSubscription.unsubscribe();
    });
  }

  private markAllVisible(): void {
    const targets = this.document.querySelectorAll<HTMLElement>(
      '.page .hero, .page .page-intro, .page .section-block, .page .editorial-card, .page .cta-banner',
    );

    targets.forEach((target) => {
      target.classList.add('reveal-on-scroll', 'is-visible');
    });
  }
}
