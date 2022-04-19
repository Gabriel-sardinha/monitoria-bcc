import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-asa-norte',
  templateUrl: './cursos-asa-norte.component.html',
  styleUrls: ['./cursos-asa-norte.component.scss']
})
export class CursosAsaNorteComponent implements OnInit {

  cursos: any[] = [
    {nome: 'Linguagem C Básico', periodo: '28/03/22 a 05/04/22', avaliacao: '07/04/22', horario: 'das 17h30 às 19h', inscricao:'Encerrado'},
    {nome: 'Linguagem C Intermediário', periodo: '25/04/22 a 06/05/22', avaliacao: '09/05/2221', horario: 'das 17h30 às 19h', inscricao:'https://forms.gle/4FiJFKeB4iRf1bKa9'},
    {nome: 'Linguagem Python Básico', periodo: '30/05/22 a 10/06/22', avaliacao: '13/06/22', horario: 'das 17h30 às 19h', inscricao:''},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
