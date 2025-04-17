import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Invest } from '../app.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter <Invest>()
  enterInitialInvestment = '0'
  enterAnnualInvestment = '0'
  enterExceptedReturn = '5'
  enterDuration = '10'


  onSubmit() {
    this.calculate.emit(
      
    )
  }
}
