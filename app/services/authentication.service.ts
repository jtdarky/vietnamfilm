// services/auth.service.ts
import { Injectable,  NgZone } from '@angular/core';
import {Router} from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';




// We want to avoid any 'name not found'
// warnings from TypeScript
declare var Auth0Lock: any;

@Injectable()
export class AuthenticationService {
    constructor( private _router: Router, private _zone: NgZone) {}

    lock = new Auth0Lock('gpnhOqi20kE7pOM61DYI6BuI93ZjgA4j', 'jasont8.auth0.com');

    login() {
        this.lock.show((error: string, profile: Object, id_token: string) => {
            if (error) {
                console.log(error);
            }
            // We get a profile object for the user from Auth0
            localStorage.setItem('profile', JSON.stringify(profile));
            // We also get the user's JWT
            localStorage.setItem('id_token', id_token);
            //redirect
            this._router.navigate(['home']);
            var test = this.loggedIn();
            this._zone.run(() => {});

        });
    }

    logout() {
        // To log out, we just need to remove
        // the user's profile and token
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');

        // redirect to home
        this._router.navigate(['home']);
    }

    loggedIn(): boolean {
        return tokenNotExpired();
    }
}