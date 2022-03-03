import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareholderRoutingModule } from './shareholder-routing.module';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { MutualFundComponent } from './Menus/mutual-fund/mutual-fund.component';


@NgModule({
  declarations: [
    ClientDashboardComponent,
    MutualFundComponent
  ],
  imports: [
    CommonModule,
    ShareholderRoutingModule
  ]
})
export class ShareholderModule { }
