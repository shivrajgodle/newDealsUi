import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareholderRoutingModule } from './shareholder-routing.module';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { MutualFundComponent } from './Menus/mutual-fund/mutual-fund.component';
import {TableModule} from 'primeng/table';

// for graph of stocks
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min'
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

PlotlyModule.plotlyjs = PlotlyJS;
@NgModule({
  declarations: [
    ClientDashboardComponent,
    MutualFundComponent
  ],
  imports: [
    ButtonModule,
    PlotlyModule,
    CommonModule,
    ShareholderRoutingModule,
    TableModule,
    FormsModule,
  ],
  exports:[
    MutualFundComponent
  ]
})
export class ShareholderModule { }
