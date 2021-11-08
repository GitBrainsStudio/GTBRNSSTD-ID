import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthenticationService } from "src/app/features/authentication/services/authentication.service";

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.authenticatedAccount;

        if (currentUser) {
            
            return true;
        }

        this.router.navigate(['/login'], { queryParams: { redirect: state.url } });
        return false;
    }
}
