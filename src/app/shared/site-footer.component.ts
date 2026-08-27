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
      <a
        href="https://www.google.com/maps/place/Jack+Garcia+%26+Co./@27.698638,-83.804601,7z/data=!3m1!4b1!4m6!3m5!1s0x27ace56edb23204f:0x731de65368019cc4!8m2!3d27.698638!4d-83.804601!16s%2Fg%2F11y_zf646_?entry=ttu"
        target="_blank"
        rel="noreferrer"
        >Google Business Profile <app-icon name="arrow-up-right" aria-hidden="true" /></a
      >
      <span>© {{ currentYear }} Jack Garcia &amp; Co.</span>
      <a href="https://jarvon.digital" target="_blank" rel="noreferrer">Site by JarVonDigital LLC</a>
    </footer>
  `,
  styleUrl: './site-footer.component.scss',
})
export class SiteFooterComponent {
  protected readonly currentYear = new Date().getFullYear();
}
