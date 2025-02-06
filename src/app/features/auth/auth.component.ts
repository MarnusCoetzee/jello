import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../core/store/auth/auth.actions';
import { AuthFacade } from '../../core/store/auth/auth.facade';

@Component({
  selector: 'auth',
  imports: [MatButtonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  constructor(private authFacade: AuthFacade) {}

  signInWithGoogle() {
    this.authFacade.login();
  }
}
