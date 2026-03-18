import { Component, signal, computed, inject } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

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
export class App {
  private readonly document = inject(DOCUMENT);

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
}
