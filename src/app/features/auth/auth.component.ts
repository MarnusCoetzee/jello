import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../core/store/auth/auth.actions';

@Component({
  selector: 'auth',
  imports: [MatButtonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  constructor(private store: Store) {}

  signInWithGoogle() {
    this.store.dispatch(AuthActions.login());
  }
}
