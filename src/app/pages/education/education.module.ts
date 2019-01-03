import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedMaterialModule } from '../../shared/shared-material/shared-material.module';

import { CollectionsComponent } from './collections/collections.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionsComponent
  }
];

@NgModule({
  declarations: [CollectionsComponent],
  imports: [CommonModule, SharedMaterialModule, RouterModule.forChild(routes)]
})
export class EducationModule {}
