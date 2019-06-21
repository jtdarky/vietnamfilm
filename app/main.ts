/*
 * Angular Imports
 */

import {bootstrap}    from 'angular2/platform/browser'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);

