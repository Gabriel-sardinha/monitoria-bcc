import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-taguatinga',
  templateUrl: './cursos-taguatinga.component.html',
  styleUrls: ['./cursos-taguatinga.component.scss']
})
export class CursosTaguatingaComponent implements OnInit {

  cursos: any[] = [
    {nome: 'Linguagem C Básico', periodo: '21/03/22 a 29/03/22', estudo: '30/03/22', avaliacao: '31/03/22', horario: 'das 11h às 12h30', inscricao:''},
    {nome: 'Linguagem C Intermediário', periodo: '25/04/22 a 03/05/22', estudo: '04/05/22', avaliacao: '05/05/22', horario: 'das 11h às 12h30', inscricao:''},
    {nome: 'HTML - CSS (HyperText Markup Language - Cascading Style Sheets)', periodo: '30/05/22 a 07/06/22', estudo: '08/06/22', avaliacao: '09/06/22', horario: 'das 11h às 12h30', inscricao:''}
  ]

/*
  - Linguagem C Básico
  Aulas: de 21/03/22 a 29/03/22
  Dia para estudar: 30/03/22
  Avaliação: 31/03/22
  Horário: das 11h às 12h30

  - Linguagem C Intermediário
  Aulas: de 25/04/22 a 03/05/22
  Dia para estudar: 04/05/22
  Avaliação: 05/05/22
  Horário: das 11h às 12h30

  - HTML - CSS (HyperText Markup Language - Cascading Style Sheets)
  Aulas: de 30/05/22 a 07/06/22
  Dia para estudar: 08/06/22
  Avaliação: 09/06/22
  Horário: das 11h às 12h30
  */



  constructor() { }

  ngOnInit(): void {
  }

}
