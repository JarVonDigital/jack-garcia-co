import { Component, Input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from './icon.component';

@Component({
  standalone: true,
  selector: 'app-site-header',
  imports: [IconComponent, RouterLink],
  template: `
    <header
      class="site-header"
      [class.menu-open]="menuOpen()"
      [class.scrolled]="scrolled() || forceSolid"
    >
      <a class="brand" routerLink="/" aria-label="Jack Garcia and Co. home"
        >Jack Garcia <i>&amp; Co.</i></a
      >
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
        <a routerLink="/" (click)="closeMenu()">Home</a
        ><a routerLink="/" fragment="services" (click)="closeMenu()">Services</a
        ><a routerLink="/" fragment="testimonials" (click)="closeMenu()">Kind words</a
        ><a class="nav-cta" routerLink="/" fragment="inquire" (click)="closeMenu()"
          >Inquire now <app-icon name="arrow-up-right" aria-hidden="true"
        /></a
        ><a class="nav-page-link" routerLink="/about" (click)="closeMenu()">About</a
        ><a class="nav-page-link" routerLink="/wedding-packages" (click)="closeMenu()">Investment</a>
      </nav>
    </header>
  `,
  styleUrl: './site-header.component.scss',
  host: {
    '(window:scroll)': 'onWindowScroll()',
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class SiteHeaderComponent {
  @Input() forceSolid = false;
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
