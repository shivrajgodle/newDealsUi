import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalystAdminDashboardComponent } from './analyst-admin-dashboard/analyst-admin-dashboard.component';

const routes: Routes = [
  {path:'',pathMatch:'full',component:AnalystAdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalystAdminRoutingModule { }
