import { Component } from '@angular/core';
import { DataService } from '../data-service.service';


@Component({
  selector: 'app-random-number',
  template: ` 
  <button (click)="getRandomNumber()"> 
    <h3> Gerar numero aleatorio </h3> 
  </button>
    <app-number-display [randomNumber]="randomNumber"></app-number-display>
  `, 
}
)


export class RandomNumberComponent {
  randomNumber: number | undefined;

  constructor(private dataService: DataService) {}

  getRandomNumber(): void {

    this.randomNumber = this.dataService.getRandomNumber();

  }
}
