import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CurrencyComponent } from './currency/currency.component';
import { CurrencyForExchangeComponent } from './currency-for-exchange/currency-for-exchange.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CurrencyComponent, CurrencyForExchangeComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
