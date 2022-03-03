import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterAdminDashboardComponent } from './master-admin-dashboard/master-admin-dashboard.component';

const routes: Routes = [
  {path:'',pathMatch:'full',component:MasterAdminDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterAdminRoutingModule { }
