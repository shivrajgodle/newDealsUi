import { Component, HostListener } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event:any) {
    return false;
  }
    theme = 'noir';

    layoutMode = 'static';

    megaMenuMode = 'gradient';

    menuMode = 'light';

    profileMode = 'inline';

    inputStyle = 'outlined';

    ripple: boolean;

    constructor(private primengConfig: PrimeNGConfig) {
    }

    ngOnInit() {
        this.primengConfig.ripple = true;
        this.ripple = true;
    }
}
