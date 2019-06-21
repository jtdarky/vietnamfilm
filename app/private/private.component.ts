/**
 * Created by g62 on 03/03/17.
 */
import {Component} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
    selector: 'db-test',
    providers: [AuthenticationService],
    templateUrl: 'app/private/private.component.html'
})
export class PrivateComponent {
    constructor(
        private _service:AuthenticationService){}

    ngOnInit(){
        this._service.checkCredentials();
    }

    logout() {
        this._service.logout();
    }
}