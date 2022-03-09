import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitores-taguatinga',
  templateUrl: './monitores-taguatinga.component.html',
  styleUrls: ['./monitores-taguatinga.component.scss']
})
export class MonitoresTaguatingaComponent implements OnInit {


  monitores: any[] = [
    {nome: "Ítalo Vinicius Neves Cordeiro", email: "lobosolitario@sempreceub.com", horario: "11h às 12h30"},
    {nome: "Antônio Vitor Arruda Vilela", email: "antonio.vitor@sempreceub.com", horario: "11h às 12h30"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
