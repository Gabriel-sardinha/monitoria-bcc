import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitores-asa-norte',
  templateUrl: './monitores-asa-norte.component.html',
  styleUrls: ['./monitores-asa-norte.component.scss']
})
export class MonitoresAsaNorteComponent implements OnInit {


  monitores: any[] = [
    {nome: "Gabriel Sardinha Ferreira", email: "gabrielsardinha@sempreceub.com", horario: "17:00 as 19:00"},
    {nome: "Gabriel Sardinha Ferreira", email: "gabrielsardinha@sempreceub.com", horario: "17:00 as 19:00"},
    {nome: "Gabriel Sardinha Ferreira", email: "gabrielsardinha@sempreceub.com", horario: "17:00 as 19:00"},
    {nome: "Gabriel Sardinha Ferreira", email: "gabrielsardinha@sempreceub.com", horario: "17:00 as 19:00"},
    {nome: "Gabriel Sardinha Ferreira", email: "gabrielsardinha@sempreceub.com", horario: "17:00 as 19:00"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
