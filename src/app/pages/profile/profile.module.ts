import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedMaterialModule } from '../../shared/shared-material/shared-material.module';

import { PersonComponent } from './person/person.component';

const routes: Routes = [
  {
    path: '',
    component: PersonComponent
  }
];

@NgModule({
  declarations: [PersonComponent],
  imports: [CommonModule, SharedMaterialModule, RouterModule.forChild(routes)]
})
export class ProfileModule {}
