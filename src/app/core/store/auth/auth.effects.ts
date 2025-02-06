import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { from, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

// Import the new Auth class and the sign-in / sign-out functions
import { Auth } from '@angular/fire/auth';
import { signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private auth = inject(Auth);
  private router = inject(Router);

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(() =>
        from(signInWithPopup(this.auth, new GoogleAuthProvider())).pipe(
          map((result) => {
            const user = result.user
              ? {
                  uid: result.user.uid,
                  displayName: result.user.displayName,
                  email: result.user.email,
                  photoURL: result.user.photoURL,
                }
              : null;
            return AuthActions.loginSuccess({ user });
          }),
          tap(() => {
            this.router.navigate(['/dashboard']);
          }),
          catchError((error) => {
            console.error('Error in signInWithPopup:', error);
            return of(AuthActions.loginFailure({ error }));
          })
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      switchMap(() =>
        from(signOut(this.auth)).pipe(
          map(() => AuthActions.logoutSuccess()),
          catchError((error) => of(AuthActions.logoutFailure({ error })))
        )
      )
    )
  );
}
