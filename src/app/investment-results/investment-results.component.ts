import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, Input, input } from '@angular/core';
import { InvestmentService } from './investment.service';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  private investmentService = inject(InvestmentService)
  
  //using computed pour obtenir les proprietes

  results = computed(()=>this.investmentService.resultsData())

  // get results() {
  //   return this.investmentService.resultsData
  // }

  // using signal
  // results = input<{
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[]>()
  
//   @Input() results?: {
//     year: number,
//     interest: number,
//     valueEndOfYear: number,
//     annualInvestment: number,
//     totalInterest: number,
//     totalAmountInvested: number,
//   }[] 
  // 
}
