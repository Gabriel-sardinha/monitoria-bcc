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
    {nome: "André Gustavo de Oliveira dos Santos", email: "andreugabagos@sempreceub.com", horario: "11h às 12h30"},
    {nome: "Davi Siqueira Corrêa Galati", email: "davigalati@gmail.com", horario: "11h às 12h30"},
    {nome: "Enzo Alves Miranda Leite", email: "enzo0402@sempreceub.com", horario: "11h às 12h30"},
    {nome: "Jeferson Marques Rodrigues", email: "joedf1006@sempreceub.com", horario: "11h às 12h30"},

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
