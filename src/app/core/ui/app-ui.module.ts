import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from '../../shared/shared-material/shared-material.module';
import { MainNavsComponent } from './main-navs/main-navs.component';
import { NavItemComponent } from './main-navs/nav-item.component';
import { SideHeaderComponent } from './side-header/side-header.component';
import { SubNavComponent } from './main-navs/sub-nav.component';
import { FakeNavService } from './main-navs/fake-nav.service';

import { from } from 'rxjs';

@NgModule({
  imports: [CommonModule, SharedMaterialModule],
  declarations: [
    MainNavsComponent,
    SideHeaderComponent,
    SubNavComponent,
    NavItemComponent
  ],
  exports: [
    MainNavsComponent,
    SideHeaderComponent,
    SubNavComponent,
    NavItemComponent
  ],
  providers: [FakeNavService]
})
export class AppUiModule {}
