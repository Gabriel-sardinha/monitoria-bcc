import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-taguatinga',
  templateUrl: './cursos-taguatinga.component.html',
  styleUrls: ['./cursos-taguatinga.component.scss']
})
export class CursosTaguatingaComponent implements OnInit {

  cursos: any[] = [
    {nome: 'Linguagem C Básico ', periodo: '30/08/21 a 08/09/21', estudo: '09/09/21', avaliacao: '10/09/21', horario: '11h às 12h30', inscricao:''},
    {nome: 'Linguagem C Básico ', periodo: '30/08/21 a 08/09/21', estudo: '09/09/21', avaliacao: '10/09/21', horario: '11h às 12h30', inscricao:''},
    {nome: 'Linguagem C Básico ', periodo: '30/08/21 a 08/09/21', estudo: '09/09/21', avaliacao: '10/09/21', horario: '11h às 12h30', inscricao:''},
    {nome: 'Linguagem C Básico ', periodo: '30/08/21 a 08/09/21', estudo: '09/09/21', avaliacao: '10/09/21', horario: '11h às 12h30', inscricao:''},
    {nome: 'Linguagem C Básico ', periodo: '30/08/21 a 08/09/21', estudo: '09/09/21', avaliacao: '10/09/21', horario: '11h às 12h30', inscricao:''},
    {nome: 'Linguagem C Básico ', periodo: '30/08/21 a 08/09/21', estudo: '09/09/21', avaliacao: '10/09/21', horario: '11h às 12h30', inscricao:''},
    {nome: 'Linguagem C Básico ', periodo: '30/08/21 a 08/09/21', estudo: '09/09/21', avaliacao: '10/09/21', horario: '11h às 12h30', inscricao:''},
    {nome: 'Linguagem C Básico ', periodo: '30/08/21 a 08/09/21', estudo: '09/09/21', avaliacao: '10/09/21', horario: '11h às 12h30', inscricao:''},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
