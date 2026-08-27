import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-site-footer',
  template: `
    <footer class="site-footer">
      <a class="brand" href="/" aria-label="Jack Garcia and Co. home">Jack Garcia <i>&amp; Co.</i></a>
      <span>Natural photographs · Meaningful stories</span>
      <a href="https://www.instagram.com/jackgarcia.co/" target="_blank" rel="noreferrer"
        >Instagram ↗</a
      >
      <span>© 2026</span>
    </footer>
  `,
  styleUrl: './site-footer.component.scss',
})
export class SiteFooterComponent {}
