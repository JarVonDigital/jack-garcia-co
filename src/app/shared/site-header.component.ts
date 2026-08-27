import { Component, signal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-site-header',
  template: `
    <header class="site-header" [class.menu-open]="menuOpen()" [class.scrolled]="scrolled()">
      <a class="brand" href="/" aria-label="Jack Garcia and Co. home">Jack Garcia <i>&amp; Co.</i></a>
      <button
        class="menu-toggle"
        type="button"
        (click)="toggleMenu()"
        [attr.aria-expanded]="menuOpen()"
        aria-controls="site-nav"
      >
        <span></span><span></span><span class="sr-only">Toggle navigation</span>
      </button>
      <nav id="site-nav" aria-label="Primary navigation">
        <a href="/" (click)="closeMenu()">Home</a><a href="/#services" (click)="closeMenu()"
          >Services</a
        ><a href="/#testimonials" (click)="closeMenu()">Kind words</a
        ><a href="/wedding-packages" (click)="closeMenu()">Investment</a
        ><a class="nav-cta" href="/#inquire" (click)="closeMenu()"
          >Inquire now <span aria-hidden="true">↗</span></a
        >
      </nav>
    </header>
  `,
  styleUrl: './site-header.component.scss',
  host: { '(window:scroll)': 'onWindowScroll()' },
})
export class SiteHeaderComponent {
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(typeof window !== 'undefined' && window.scrollY > 24);

  protected toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected onWindowScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }
}
