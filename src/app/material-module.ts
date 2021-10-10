import { NgModule } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';

import { MatIconModule } from '@angular/material/icon';

import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  exports: [
    A11yModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,

  ]
})
export class CerebrumMaterialModule { }


/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */