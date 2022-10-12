import { Component, OnInit } from '@angular/core';
import { CurrencyApiService } from '../currency-api.service';
import { ICurrencyExchange } from '../currency-for-exchange/currency-exchange.interface';
import { ICurrencyLatest } from './currency-latest.interface';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
})
export class CurrencyComponent implements OnInit {
  baseCurrency = 'UAH';
  currencyToConvert = 'EUR,USD,GBP';

  data: ICurrencyLatest | undefined;
  constructor(private currencyApiService: CurrencyApiService) {}

  ngOnInit(): void {
    this.getLatest();
  }

  getLatest() {
    this.currencyApiService
      .getLatest(this.baseCurrency, this.currencyToConvert)
      .subscribe((data: ICurrencyLatest) =>
        console.log(
          (this.data = {
            base: (data as ICurrencyLatest).base,
            date: (data as ICurrencyLatest).date,
            rates: (data as ICurrencyLatest).rates,
          })
        )
      );
  }
}
