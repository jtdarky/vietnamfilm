/**
 * Created by g62 on 01/02/17.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User, AuthenticationService} from '../services/authentication.service';

@Component({
    selector: 'db-login',
    providers: [AuthenticationService],
    templateUrl: 'app/login/login.component.html'
})


export class LoginComponent {

    public user = new User('','');
    public errorMsg = '';

    constructor(
        private _service:AuthenticationService) {}

    login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
    }
}