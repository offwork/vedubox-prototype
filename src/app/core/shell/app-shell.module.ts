import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedMaterialModule } from '../../shared/shared-material/shared-material.module';
import { AppUiModule } from '../../core/ui/app-ui.module';

import { AppLayoutComponent } from './app-layout.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppLayoutComponent,
    FooterComponent,
    ContentComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedMaterialModule,
    AppUiModule
  ],
  exports: [
    AppLayoutComponent,
    FooterComponent,
    ContentComponent,
    NavbarComponent
  ]
})
export class AppShellModule {}
