import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-taguatinga',
  templateUrl: './cursos-taguatinga.component.html',
  styleUrls: ['./cursos-taguatinga.component.scss']
})
export class CursosTaguatingaComponent implements OnInit {

  cursos: any[] = [
    {nome: 'Linguagem Java Básico', periodo: '28/03/22 a 05/04/22', estudo: '06/04/22', avaliacao: '07/04/22', horario: 'das 11h às 12h30', inscricao:'https://forms.gle/e1s4CpqXUBWRXdTN8'},
    {nome: 'Linux', periodo: '25/04/22 a 03/05/22', estudo: '04/05/22', avaliacao: '05/05/22', horario: 'das 11h às 12h30', inscricao:''},
    {nome: 'HTML - CSS', periodo: '30/05/22 a 07/06/22', estudo: '08/06/22', avaliacao: '09/06/22', horario: 'das 11h às 12h30', inscricao:''}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
