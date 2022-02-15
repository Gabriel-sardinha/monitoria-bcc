import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitores-taguatinga',
  templateUrl: './monitores-taguatinga.component.html',
  styleUrls: ['./monitores-taguatinga.component.scss']
})
export class MonitoresTaguatingaComponent implements OnInit {


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
