import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitoresRoutingModule } from './monitores-routing.module';
import { MonitoresAsaNorteComponent } from './monitores-asa-norte/monitores-asa-norte.component';
import { MonitoresTaguatingaComponent } from './monitores-taguatinga/monitores-taguatinga.component';


@NgModule({
  declarations: [
    MonitoresAsaNorteComponent,
    MonitoresTaguatingaComponent
  ],
  imports: [
    CommonModule,
    MonitoresRoutingModule
  ]
})
export class MonitoresModule { }
