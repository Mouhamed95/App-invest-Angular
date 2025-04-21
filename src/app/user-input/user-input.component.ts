import { Component, EventEmitter, inject, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import  { Invest } from '../investment.model';
import { InvestmentService } from '../investment-results/investment.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<Invest>()
  // calculate = output<Invest>()

  enterInitialInvestment =  signal('0') 
  enterAnnualInvestment = signal('0') 
  enterExceptedReturn =  signal('5') 
  enterDuration = signal('10') 
  
  // constructor(private investmentService: InvestmentService) { }
  private investmentService = inject(InvestmentService)

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enterInitialInvestment(),
      duration: +this.enterDuration(),
      expectedReturn : +this.enterExceptedReturn(),
      annualInvestment : +this.enterInitialInvestment(),
    })
    this.enterInitialInvestment.set('0')
    this.enterAnnualInvestment.set('0')
    this.enterExceptedReturn.set('5')
    this.enterDuration.set('10')

    // this.calculate.emit({
    //   initialInvestment: +this.enterInitialInvestment(),
    //   duration: +this.enterDuration(),
    //   expectedReturn : +this.enterExceptedReturn(),
    //   annualInvestment : +this.enterInitialInvestment(),
    // })
 
  }
}
