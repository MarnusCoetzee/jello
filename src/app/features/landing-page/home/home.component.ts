import { MatButtonModule } from '@angular/material/button';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'landing-page-home',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
