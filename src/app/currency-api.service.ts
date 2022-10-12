import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ICurrencyLatest } from './currency/currency-latest.interface';
import { ICurrencyExchange } from './currency-for-exchange/currency-exchange.interface';

@Injectable({
  providedIn: 'root',
})
export class CurrencyApiService {
  constructor(private http: HttpClient) {}

  private url = 'https://api.exchangerate.host/';

  getLatest(
    baseCurrency: string,
    currencyToConvert: string
  ): Observable<ICurrencyLatest> {
    return this.http.get<ICurrencyLatest>(
      `${this.url}latest?base=${baseCurrency}&symbols=${currencyToConvert}`
    );
  }

  getForExchange(
    fromCurrency: string,
    toCurrency: string,
    amount: number
  ): Observable<ICurrencyExchange> {
    return this.http.get<ICurrencyExchange>(
      `${this.url}convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`
    );
  }
}
