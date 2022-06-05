import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './dashboard/header/header.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class CoreModule { }
