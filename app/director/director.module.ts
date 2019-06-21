/**
 * Created by g62 on 23/01/17.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {DirectorListComponent} from './director-list.component';
import {DirectorViewComponent} from './director-view.component';
import {DirectorCardComponent} from './director-card.component';
import {DirectorSearchComponent} from './director-search.component';
import {DirectorGridComponent} from './director-grid.component';

import {DirectorService} from './director.service';


import {DirectorCategoryModule} from '../directorcategory/directorcategory.module';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, DirectorCategoryModule],
    declarations: [DirectorListComponent, DirectorViewComponent, DirectorCardComponent, DirectorSearchComponent, DirectorGridComponent],
    exports: [DirectorListComponent, DirectorViewComponent, DirectorCardComponent, DirectorSearchComponent, DirectorGridComponent],
    providers: [DirectorService]
})
export class DirectorModule {}