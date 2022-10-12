import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CurrencyApiService } from '../currency-api.service';
import { ICurrencyExchange } from './currency-exchange.interface';

@Component({
  selector: 'app-currency-for-exchange',
  templateUrl: './currency-for-exchange.component.html',
  styleUrls: ['./currency-for-exchange.component.css'],
})
export class CurrencyForExchangeComponent implements OnInit {
  currencyOption = ['EUR', 'USD', 'UAH', 'GBP'];
  fromCurrency = this.currencyOption[0];
  toCurrency = this.currencyOption[2];
  amount = 1;
  resultAfterExchange: ICurrencyExchange | undefined;

  constructor(private currencyApiService: CurrencyApiService) {}

  ngOnInit(): void {
    this.getForExchange();
  }

  getForExchange() {
    console.log(this.fromCurrency, this.toCurrency);
    this.currencyApiService
      .getForExchange(this.fromCurrency, this.toCurrency, this.amount)
      .subscribe((data: ICurrencyExchange) =>
        console.log(
          (this.resultAfterExchange = {
            result: (data as ICurrencyExchange).result,
          })
        )
      );
  }
}
