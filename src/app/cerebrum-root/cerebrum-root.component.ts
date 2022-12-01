import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { onSideNavChange, animateText } from '../animations/animations'
import { onMainContentChange } from '../animations/animations';
import { SideNavService } from '../services/sidenav.service';

@Component({
  selector: 'app-cerebrum-root',
  templateUrl: './cerebrum-root.component.html',
  styleUrls: ['./cerebrum-root.component.css'],
  animations: [onMainContentChange, onSideNavChange, animateText]
})
export class CerebrumRootComponent implements OnInit {
  events: string[] = [];
  linkText: boolean = false;
  cerebrumApps: any = [
    {
      "appId": 1,
      "appIcon": "dashboard",
      "appTitle": "App Mesh",
      "appurl": "http://kiali.example.com:8080",
      "enabled": true
    },
    {
      "appId": 2,
      "appIcon": "assignment",
      "appTitle": "App Logging",
      "appurl": "http://grafana.example.com:8080/explore?orgId=1&left=%7B%22datasource%22:%22Loki%22,%22queries%22:%5B%7B%22refId%22:%22A%22,%22expr%22:%22%22,%22queryType%22:%22range%22%7D%5D,%22range%22:%7B%22from%22:%22now-1h%22,%22to%22:%22now%22%7D%7D",
      "enabled": true
    },

    {
      "appId": 3,
      "appIcon": "assessment",
      "appTitle": "App Metrics",
      "appurl": "http://grafana.example.com:8080/d/3--MLVZZk/istio-control-plane-dashboard?orgId=1&refresh=5s&from=1669865739763&to=1669866039763",
      "enabled": true
    },
    {
      "appId": 4,
      "appIcon": "share",
      "appTitle": "API Tracing",
      "appurl": "http://tracing.example.com:8080",
      "enabled": true
    },
    {
      "appId": 5,
      "appIcon": "bug_report",
      "appTitle": "App Inspect",
      "appurl": "https://glitchtip.example.com:8080",
      "enabled": true
    },
    {
      "appId": 6,
      "appIcon": "account_tree",
      "appTitle": "Container Manager",
      "appurl": "http://dashboard.example.com:8080",
      "enabled": true
    }/*,
    {
      "appId": 6,
      "appIcon": "folder_shared",
      "appTitle": "Storage",
      "appurl": "https://prometheus.192.168.49.2.nip.io",
      "enabled": true
    },
    {
      "appId": 7,
      "appIcon": "account_circle",
      "appTitle": "Accounts",
      "appurl": "http://keycloak.192.168.49.2.nip.io",
      "enabled": true
    }/*,
    {
      "appId": 8,
      "appIcon": "apps",
      "appTitle": "Sample app",
      "appurl": "https://hotrod.devlabs-tools.net/",
      "enabled": true
    }*/
  ]
  opened: boolean = true;
  sideNavMode: any = "push";
  public onSideNavChange: boolean = true;
  public sideNavState: boolean = false;
  showLoading = false;
  containerUrl: any = this.cerebrumApps[0];
  urlSafe: SafeResourceUrl;
  constructor(private domSanitizer: DomSanitizer, private _sidenavService: SideNavService) { 
    this._sidenavService.sideNavState$.subscribe(res => {
      console.log(res)
      this.onSideNavChange = res;
    })
  }

  ngOnInit(): void {
    this.showLoading = true;
    this.urlSafe = this.domSanitizer.bypassSecurityTrustResourceUrl("http://dashboard.example.com:8080");
    //this.containerUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://elastic.devlabs-tools.net/app/home#/');
    //this.urlSafe = this.domSanitizer.bypassSecurityTrustResourceUrl(this.cerebrumApps[0]);
  }

  navigate(cerebrumApp: any): void {
    if (cerebrumApp && cerebrumApp.appId!=0) {
      console.log("navigating..." + cerebrumApp.appurl)
      this.showLoading = true;
      this.urlSafe = this.domSanitizer.bypassSecurityTrustResourceUrl(cerebrumApp.appurl);
    }else if(cerebrumApp.appId==0){
      window.open("http://dashboard.example.com:8080","_blank")   //or use _self for same tab
    }

  }

  onLoad() {
    console.log("loladed")
    this.showLoading = false;
  }

  onSidenavToggle() {
    this.sideNavState = !this.sideNavState
    
    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200)
    //this._sidenavService.sideNavState$.next(this.sideNavState)
  }

}
