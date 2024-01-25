import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private authService: AuthenticationService, private router: Router) {}

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

//     return this.authService.login().pipe(
//       map(authenticated => {
//         if (authenticated) {
//           return true;
//         } else {
//           this.router.navigate(['/login']);
//           return false;
//         }
//       }),
//       catchError(() => {
//         this.router.navigate(['/login']);
//         return Observable.of(false);
//       })
//     );
//   }
}
