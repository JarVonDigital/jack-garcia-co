import { Component, Input } from '@angular/core';

export type IconName = 'arrow-down' | 'arrow-down-right' | 'arrow-up-right';

@Component({
  standalone: true,
  selector: 'app-icon',
  template: `
    @switch (name) {
      @case ('arrow-down') {
        <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
          <path d="M8 2.5v11M3.5 9l4.5 4.5L12.5 9" />
        </svg>
      }
      @case ('arrow-down-right') {
        <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
          <path d="M3 3l10 10M7 13h6V7" />
        </svg>
      }
      @default {
        <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
          <path d="M3 13L13 3M7 3h6v6" />
        </svg>
      }
    }
  `,
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  @Input() name: IconName = 'arrow-up-right';
}
