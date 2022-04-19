import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-taguatinga',
  templateUrl: './cursos-taguatinga.component.html',
  styleUrls: ['./cursos-taguatinga.component.scss']
})
export class CursosTaguatingaComponent implements OnInit {

  cursos: any[] = [
    {nome: 'Linguagem Java Básico', periodo: '28/03/22 a 05/04/22', avaliacao: '07/04/22', horario: 'das 11h às 12h30', inscricao:'Encerrado'},
    {nome: 'Linux', periodo: '25/04/22 a 06/05/22', avaliacao: '09/05/22', horario: 'das 11h às 12h30', inscricao:'https://forms.gle/QYbXdmDk8VseGoLe9'},
    {nome: 'HTML - CSS', periodo: '30/05/22 a 10/06/22', avaliacao: '13/06/22', horario: 'das 11h às 12h30', inscricao:''}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
