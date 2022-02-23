import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-asa-norte',
  templateUrl: './cursos-asa-norte.component.html',
  styleUrls: ['./cursos-asa-norte.component.scss']
})
export class CursosAsaNorteComponent implements OnInit {

  cursos: any[] = [
    {nome: 'Linguagem C Básico', periodo: '21/03/22 a 29/03/22', estudo: '30/03/22', avaliacao: '31/03/22', horario: 'das 17h30 às 19h', inscricao:''},
    {nome: 'Linguagem C Intermediário', periodo: '25/04/22 a 03/05/22', estudo: '04/05/22', avaliacao: '05/05/2221', horario: 'das 17h30 às 19h', inscricao:''},
    {nome: 'Linguagem Python Básico', periodo: '30/05/22 a 07/06/22', estudo: '08/06/22', avaliacao: '09/06/22', horario: 'das 17h30 às 19h', inscricao:''},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
