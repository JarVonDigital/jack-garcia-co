import { Component } from '@angular/core';
import { IconComponent } from './icon.component';

@Component({
  standalone: true,
  selector: 'app-site-footer',
  imports: [IconComponent],
  template: `
    <footer class="site-footer">
      <a class="brand" href="/" aria-label="Jack Garcia and Co. home">Jack Garcia <i>&amp; Co.</i></a>
      <span>Natural photographs · Meaningful stories</span>
      <a href="https://www.instagram.com/jackgarcia.co/" target="_blank" rel="noreferrer"
        >Instagram <app-icon name="arrow-up-right" aria-hidden="true" /></a
      >
      <a href="https://jarvon.digital" target="_blank" rel="noreferrer">© 2026 JarVonDigital LLC</a>
    </footer>
  `,
  styleUrl: './site-footer.component.scss',
})
export class SiteFooterComponent {}
