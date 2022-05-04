import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
export class TesteComponent {
  tasks: any;
  selectAll = false;

  constructor() {
    this.tasks = [
      { name: "Varrer a casa", tempo: 20, checked: false },
      { name: "Aspirar a Casa", tempo: 15, checked: false },
      { name: "Passar o pano no chão", tempo: 40, checked: false },
      { name: "Lavar a louça", tempo: 10, checked: false },
      { name: "Tirar o pó", tempo: 20, checked: false },
      { name: "Arrumar o quarto", tempo: 30, checked: false },
      { name: "Arrumar a sala", tempo: 25, checked: false },
      { name: "Arrumar a Cozinha", tempo: 25, checked: false },
      { name: "Arrumar e limpar o banheiro", tempo: 50, checked: false },
      { name: "Arrumar o roupeiro", tempo: 20, checked: false }
    ];
  }

  // teste() {
  //   console.log(this.tasks);
  // }

  tempo = 0;

  updateCheck() {
    if (this.selectAll === true) {
      this.tasks.map((task) => {
        task.checked = true;
      });
    } else {
      this.tasks.map((pizza) => {
        pizza.checked = false;
      });
    }
  }

  calculo() {
    if (this.tasks.checked === true) {
      this.tasks.map((task) => {
        let tempoTotal = this.tempo + task.time;
        console.log(tempoTotal)
      });
    }
  }
}
