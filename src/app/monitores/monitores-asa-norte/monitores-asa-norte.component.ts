import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitores-asa-norte',
  templateUrl: './monitores-asa-norte.component.html',
  styleUrls: ['./monitores-asa-norte.component.scss']
})
export class MonitoresAsaNorteComponent implements OnInit {


  monitores: any[] = [
    {nome: "Érica Moraes Abdão", email: "erica.abdao@sempreceub.com", horario: "17h às 19h10"},
    {nome: "Lucas Borges Vieira", email: "lucasborges@sempreceub.com", horario: "17h às 19h10"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
