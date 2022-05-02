import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela1',
  templateUrl: './tela1.component.html',
  styleUrls: ['./tela1.component.scss']
})
export class Tela1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  tasks = [
    { name: "Varrer a casa", tempo: 20 },
    { name: "Aspirar a Casa", tempo: 15 },
    { name: "Passar o pano no chão", tempo: 40 },
    { name: "Lavar a louça", tempo: 10 },
    { name: "Tirar o pó", tempo: 20 },
    { name: "Arrumar o quarto", tempo: 30 },
    { name: "Arrumar a sala", tempo: 25 },
    { name: "Arrumar a Cozinha", tempo: 25 },
    { name: "Arrumar e limpar o banheiro", tempo: 50 },
    { name: "Arrumar o roupeiro", tempo: 20 }    
  ]


}
