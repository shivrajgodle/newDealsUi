import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AppMainComponent } from 'src/app/app.main.component';

@Component({
  selector: 'app-master-admin-dashboard',
  templateUrl: './master-admin-dashboard.component.html',
  styleUrls: ['./master-admin-dashboard.component.scss']
})
export class MasterAdminDashboardComponent {

  settingsDialog=false;
  display=false;
    constructor() {}

    settings()
    {
      this.settingsDialog=true;
    }

    logout()
    {
      alert("done...!!")
    }

    onClickMenu()
    {
      this.display=true;
    }

}
