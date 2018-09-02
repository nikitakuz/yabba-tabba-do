import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const authService = this.authService;
    const router = this.router;
    return this.authService.getUser().pipe(map(function(user) {
      if (user === null) {
        authService.redirectUrl = state.url;
        router.navigate(['/auth']);
      }
      return user !== null;
    }));
  }
}

@Injectable({
  providedIn: 'root'
})
export class NegateAuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const router = this.router;
    return this.authService.getUser().pipe(map(function(user) {
      if (user !== null) {
        router.navigate(['/dashboard']);
      }
      return user === null;
    }));
  }
}
