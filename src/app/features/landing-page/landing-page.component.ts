import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LandingPageNavBarComponent } from './landing-page-nav-bar/landing-page-nav-bar.component';

@Component({
  selector: 'feature-landing-page',
  imports: [RouterOutlet, LandingPageNavBarComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements OnInit {
  isHandset$!: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {}
}
