import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'landing-page-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './landing-page-nav-bar.component.html',
  styleUrl: './landing-page-nav-bar.component.scss',
})
export class LandingPageNavBarComponent {}
