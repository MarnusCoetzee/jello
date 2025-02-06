import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { authState } from 'rxfire/auth';
import { map } from 'rxjs/operators';

export const unAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(Auth);

  return authState(auth).pipe(
    map((user) => {
      if (!user) {
        return true;
      }
      router.navigate(['/dashboard']);
      return false;
    })
  );
};
