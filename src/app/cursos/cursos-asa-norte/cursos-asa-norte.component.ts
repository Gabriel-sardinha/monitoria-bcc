import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-asa-norte',
  templateUrl: './cursos-asa-norte.component.html',
  styleUrls: ['./cursos-asa-norte.component.scss']
})
export class CursosAsaNorteComponent implements OnInit {

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
