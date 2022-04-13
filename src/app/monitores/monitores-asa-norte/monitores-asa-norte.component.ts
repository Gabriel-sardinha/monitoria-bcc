import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitores-asa-norte',
  templateUrl: './monitores-asa-norte.component.html',
  styleUrls: ['./monitores-asa-norte.component.scss']
})
export class MonitoresAsaNorteComponent implements OnInit {


  monitores: any[] = [
    {nome: "Érica Moraes Abdão", email: "erica.abdao@sempreceub.com", horario: "17h30 às 19h"},
    {nome: "Lucas Borges Vieira", email: "lucasborges@sempreceub.com", horario: "17h30 às 19h"},
    {nome: "Victor Aragão Mayer Duarte", email: "victor.aragao@sempreceub.com", horario: "17h30 às 19h"},
    {nome: "Carlos David Castro de Souza Neto", email: "dauid64@sempreceub.com", horario: "17h30 às 19h"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
