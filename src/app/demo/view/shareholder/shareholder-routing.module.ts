import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { MutualFundComponent } from './Menus/mutual-fund/mutual-fund.component';

const routes: Routes = [
  {path:'',pathMatch:'*',component:ClientDashboardComponent},
  {path:'mutualFund',component:MutualFundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareholderRoutingModule { }
