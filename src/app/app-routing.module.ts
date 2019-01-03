import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './core/shell/app-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './pages/home/home.module#HomeModule'
      },
      {
        path: 'profile',
        loadChildren: './pages/profile/profile.module#ProfileModule'
      },
      {
        path: 'education',
        loadChildren: './pages/education/education.module#EducationModule'
      }
    ]
  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
