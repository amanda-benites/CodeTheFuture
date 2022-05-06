import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
export class TesteComponent implements OnInit{
  tasks: any;
  selectAll = false;

  constructor() {
    this.tasks = [
      { name: "Arrumar a cama", tempo: 5, checked: false }, 
      { name: "Arrumar a cozinha", tempo: 25, checked: false },
      { name: "Arrumar a geladeira", tempo: 20, checked: false },
      { name: "Arrumar a sala", tempo: 25, checked: false },
      { name: "Arrumar e limpar o banheiro", tempo: 50, checked: false },
      { name: "Arrumar o quarto", tempo: 30, checked: false },
      { name: "Arrumar o roupeiro", tempo: 20, checked: false },
      { name: "Aspirar a casa", tempo: 15, checked: false },
      { name: "Aspirar a cozinha", tempo: 3, checked: false },
      { name: "Aspirar a sala", tempo: 5, checked: false },
      { name: "Aspirar o quarto", tempo: 5, checked: false },
      { name: "Dobrar até 20 peças de roupa", tempo: 15, checked: false },
      { name: "Dobrar mais de 20 peças de roupa", tempo: 25, checked: false },
      { name: "Lavar a louça", tempo: 10, checked: false },
      { name: "Limpar as janelas", tempo: 10, checked: false },
      { name: "Limpar o box", tempo: 10, checked: false },
      { name: "Passar o pano no chão", tempo: 40, checked: false },
      { name: "Tirar o pó", tempo: 20, checked: false },
      { name: "Varrer a casa", tempo: 20, checked: false },
    ];
  }

  ngOnInit() {
}

  tempo = 0;
  tempoTotal = 0;

  teste(event: any, task) {
    console.log(event.checked, task)
    console.log(this.tempoTotal, task.checked);
    if (task.checked) {
      this.tempoTotal += task.tempo;
    }
  }
}
