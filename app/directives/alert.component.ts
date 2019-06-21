/**
 * Created by g62 on 01/02/17.
 */
import {Component, OnInit } from '@angular/core';

import { AlertService } from '../services/alert.service';

@Component({
    selector: 'alert',
    templateUrl: 'app/directives/alert.component.html'
})

export class AlertComponent {
    message: any;


    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }
}
