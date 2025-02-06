import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AuthActions from './auth.actions';
import * as AuthSelectors from './auth.selectors';
import { AuthState } from './auth.reducer';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  user$: Observable<{
    uid: string;
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
  } | null>;
  loading$: Observable<boolean>;

  constructor(private store: Store<AuthState>) {
    this.user$ = this.store.select(AuthSelectors.selectUser);
    this.loading$ = this.store.select(AuthSelectors.selectLoading);
  }

  login(): void {
    this.store.dispatch(AuthActions.login());
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }
}
