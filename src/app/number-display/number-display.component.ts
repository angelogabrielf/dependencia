import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number-display',
  template: '<H2> O Numero aleatorio é : {{ randomNumber }} </H2>',
}
)
export class NumberDisplayComponent {
  
  @Input() randomNumber: number | undefined;

}

