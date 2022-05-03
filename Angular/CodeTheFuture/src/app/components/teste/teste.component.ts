import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
export class CheckboxConfigurableExample {
  pizzaIng: any;
  selectAll = false;

  constructor() {
    this.pizzaIng = [
      { name: 'Varrer a casa', time: 3, checked: false },
      { name: 'Lavar a louça', time: 10, checked: true },
    ];
  }

  teste() {
    console.log(this.pizzaIng);
  }

  updateCheck() {
    console.log(this.selectAll);
    if (this.selectAll === true) {
      this.pizzaIng.map((pizza) => {
        pizza.checked = true;
      });
    } else {
      this.pizzaIng.map((pizza) => {
        pizza.checked = false;
      });
    }
  }
}
