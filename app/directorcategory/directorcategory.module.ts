import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {DirectorCategoryListComponent} from './directorcategory-list.component';
import {DirectorCategoryTitlePipe} from './directorcategory.pipe';
import {DirectorCategoryCardComponent} from './directorcategory-card.component';

import {DirectorCategoryService} from './directorcategory.service';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    declarations: [DirectorCategoryListComponent, DirectorCategoryTitlePipe, DirectorCategoryCardComponent ],
    exports: [DirectorCategoryListComponent, DirectorCategoryTitlePipe, DirectorCategoryCardComponent],
    providers: [DirectorCategoryService]
})
export class DirectorCategoryModule {}