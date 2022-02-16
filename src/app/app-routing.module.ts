import { CursosTaguatingaComponent } from './cursos/cursos-taguatinga/cursos-taguatinga.component';
import { CursosAsaNorteComponent } from './cursos/cursos-asa-norte/cursos-asa-norte.component';
import { MonitoresTaguatingaComponent } from './monitores/monitores-taguatinga/monitores-taguatinga.component';
import { MonitoresAsaNorteComponent } from './monitores/monitores-asa-norte/monitores-asa-norte.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'monitores',
    loadChildren: () =>
      import('./monitores/monitores.module').then((m) => m.MonitoresModule),
  },
  {
    path: 'cursos',
    loadChildren: () =>
      import('./cursos/cursos.module').then((m) => m.CursosModule),
  },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
