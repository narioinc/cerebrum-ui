import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CerebrumRootComponent } from './cerebrum-root/cerebrum-root.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {CerebrumMaterialModule} from './material-module'
import { SideNavService } from './services/sidenav.service'

@NgModule({
  declarations: [
    AppComponent,
    CerebrumRootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    CerebrumMaterialModule
  ],
  providers: [SideNavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
