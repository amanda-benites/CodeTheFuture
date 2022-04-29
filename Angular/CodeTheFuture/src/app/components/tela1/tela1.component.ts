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
    { name: "Varrer a casa", time: 20 },
    { name: "Aspirar a Casa", time: 15 },
    { name: "Passar o pano no chão", time: 40 },
    { name: "Lavar a louça", time: 10 },
    { name: "Tirar o pó", time: 20 },
    { name: "Arrumar o quarto", time: 30 },
    { name: "Arrumar a sala", time: 25 },
    { name: "Arrumar a Cozinha", time: 25 },
    { name: "Arrumar e limpar o banheiro", time: 50 },
    { name: "Arrumar o roupeiro", time: 20 },    
  ]
}
