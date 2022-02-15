import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitoresRoutingModule } from './monitores-routing.module';
import { MonitoresComponent } from './monitores/monitores.component';


@NgModule({
  declarations: [
    MonitoresComponent
  ],
  imports: [
    CommonModule,
    MonitoresRoutingModule
  ]
})
export class MonitoresModule { }
