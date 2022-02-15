import { MonitoresTaguatingaComponent } from './monitores-taguatinga/monitores-taguatinga.component';
import { MonitoresAsaNorteComponent } from './monitores-asa-norte/monitores-asa-norte.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'monitores-asa-norte', component: MonitoresAsaNorteComponent},
  {path: 'monitores-taguatinga', component: MonitoresTaguatingaComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonitoresRoutingModule { }
