/*
 * Angular Imports
 */
import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'db-navbar',
  templateUrl: 'app/navbar/navbar.component.html',
  providers: [ AuthenticationService ]
})
export class NavbarComponent {
  constructor(private auth: AuthenticationService) {}
  login() {
    this.auth.login();
  }
  logout() {
    this.auth.logout();
  }
  loggedIn () {
    this.auth.loggedIn();
  }
}