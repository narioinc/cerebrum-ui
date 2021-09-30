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
      "appId": 0,
      "appIcon": "apps",
      "appTitle": "App Manager",
      "appurl": "http://helloworld2.info"
    },
    {
      "appId": 1,
      "appIcon": "assignment",
      "appTitle": "App Logging",
      "appurl": "http://localhost:8083/"
    },

    {
      "appId": 2,
      "appIcon": "assessment",
      "appTitle": "App Metrics",
      "appurl": "http://localhost:7073/",
    },
    {
      "appId": 3,
      "appIcon": "share",
      "appTitle": "API Tracing",
      "appurl": "https://jaeger.devlabs-tools.net/",
    },
    {
      "appId": 4,
      "appIcon": "bug_report",
      "appTitle": "App Inspect",
      "appurl": "http://helloworld.info/glitch/",
    },
    {
      "appId": 5,
      "appIcon": "folder_shared",
      "appTitle": "Storage",
      "appurl": "https://prometheus.devlabs-tools.net/",
    },]
  opened: boolean = true;
  sideNavMode: any = "push";
  public onSideNavChange: boolean = true;
  public sideNavState: boolean = false;
  containerUrl: any = this.cerebrumApps[0];
  urlSafe: SafeResourceUrl;
  constructor(private domSanitizer: DomSanitizer, private _sidenavService: SideNavService) { 
    this._sidenavService.sideNavState$.subscribe(res => {
      console.log(res)
      this.onSideNavChange = res;
    })
  }

  ngOnInit(): void {
    this.urlSafe = this.domSanitizer.bypassSecurityTrustResourceUrl("https://hotrod.devlabs-tools.net/");
    //this.containerUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://elastic.devlabs-tools.net/app/home#/');
    //this.urlSafe = this.domSanitizer.bypassSecurityTrustResourceUrl(this.cerebrumApps[0]);
  }

  navigate(cerebrumApp: any): void {
    //if (cerebrumApp && cerebrumApp.appId!=0) {
      console.log("navigating..." + cerebrumApp.appurl)
      this.urlSafe = this.domSanitizer.bypassSecurityTrustResourceUrl(cerebrumApp.appurl);
    //}else if(cerebrumApp.appId==0){
    //  window.open("http://aa0f9814f143a443297e9f931e3a9922-462708366.us-east-1.elb.amazonaws.com/dashboard/login/sso?continue=/","_self")
    //}

  }

  onSidenavToggle() {
    this.sideNavState = !this.sideNavState
    
    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200)
    //this._sidenavService.sideNavState$.next(this.sideNavState)
  }

}
