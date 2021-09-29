import { Component } from '@angular/core';
import { SideNavService } from './services/sidenav.service';
import { onMainContentChange } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ onMainContentChange ]
})

export class AppComponent {
  title = 'cerebrum-ui';
  public onSideNavChange: boolean;

  constructor(private _sidenavService: SideNavService) {
    this._sidenavService.sideNavState$.subscribe(res => {
      console.log(res)
      this.onSideNavChange = res;
    })
  }
}
