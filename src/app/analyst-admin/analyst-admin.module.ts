import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalystAdminRoutingModule } from './analyst-admin-routing.module';
import { AnalystAdminDashboardComponent } from './analyst-admin-dashboard/analyst-admin-dashboard.component';


@NgModule({
  declarations: [
    AnalystAdminDashboardComponent
  ],
  imports: [
    CommonModule,
    AnalystAdminRoutingModule
  ]
})
export class AnalystAdminModule { }
