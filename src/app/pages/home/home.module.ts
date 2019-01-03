import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedMaterialModule } from '../../shared/shared-material/shared-material.module';

import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  }
];

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, SharedMaterialModule, RouterModule.forChild(routes)]
})
export class HomeModule {}
