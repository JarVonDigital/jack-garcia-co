import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about-page.component.html',
  styleUrls: ['./page-styles.scss', './about-page.component.scss'],
})
export class AboutPageComponent {}
