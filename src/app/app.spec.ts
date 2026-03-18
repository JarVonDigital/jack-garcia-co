import { TestBed } from '@angular/core/testing';

import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      }),
    });

    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('creates the application shell', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders the hero headline', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.hero-title')?.textContent).toContain(
      'Florida wedding and portrait photography',
    );
  });

  it('renders the footer with the current copyright year', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const footerText = compiled.querySelector('.site-footer')?.textContent ?? '';

    expect(footerText).toContain(`${new Date().getFullYear()} Jack Garcia`);
    expect(footerText).toContain('JarVonDigital LLC');
  });
});
