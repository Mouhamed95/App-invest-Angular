import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { type Invest } from './investment.model';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // resultsData = signal <{
  //     year: number,
  //     interest: number,
  //     valueEndOfYear: number,
  //     annualInvestment: number,
  //     totalInterest: number,
  //     totalAmountInvested: number,
  //   }[] | undefined >(undefined)


  // resultsData?: {
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[]

   

  // calculateInvestmentResults(data: Invest) {
  //   const { initialInvestment, annualInvestment, expectedReturn, duration } = data

  //   const annualData = []
  //   let investmentValue = initialInvestment

  //   for (let i = 0; i < duration; i++){
  //     const year = i + 1
  //     const interestEarnedInYear = investmentValue * (expectedReturn / 100)
  //     investmentValue += interestEarnedInYear + annualInvestment
  //     const totalInterest = investmentValue - annualInvestment * year - initialInvestment
  //     annualData.push({
  //       year: year,
  //       interest: interestEarnedInYear,
  //       valueEndOfYear: investmentValue,
  //       annualInvestment: annualInvestment,
  //       totalInterest: totalInterest,
  //       totalAmountInvested: initialInvestment + annualInvestment * year
  //     })
  //   }
  //   this.resultsData.set(annualData)  
  // }


}
