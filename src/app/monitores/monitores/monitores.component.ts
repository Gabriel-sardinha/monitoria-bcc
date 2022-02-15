import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitores',
  templateUrl: './monitores.component.html',
  styleUrls: ['./monitores.component.scss']
})
export class MonitoresComponent implements OnInit {

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
