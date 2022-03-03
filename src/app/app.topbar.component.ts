import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    settingsDialog=false;
    constructor(public app: AppComponent, public appMain: AppMainComponent,private router:Router) {}

    settings()
    {
      this.settingsDialog=true;
    }

    logout()
    {
      this.router.navigate(['/']);
    }
}
