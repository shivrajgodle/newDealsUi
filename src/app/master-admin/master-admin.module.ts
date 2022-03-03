import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterAdminRoutingModule } from './master-admin-routing.module';
import { MasterAdminDashboardComponent } from './master-admin-dashboard/master-admin-dashboard.component';
import { AppTopBarComponent } from '../app.topbar.component';
import { AppModule } from '../app.module';
import { TopbarComponent } from './topbar/topbar.component';


@NgModule({
  declarations: [
    MasterAdminDashboardComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule,
    MasterAdminRoutingModule
  ]
})
export class MasterAdminModule { }
