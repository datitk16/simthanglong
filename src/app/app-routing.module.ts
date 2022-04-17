import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/core/dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,

  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: false, relativeLinkResolution: 'corrected' }),
  ],
})
export class AppRoutingModule { }
