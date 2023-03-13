import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DepositmoneyComponent } from './depositmoney/depositmoney.component';
import { WithdrawmoneyComponent } from './withdrawmoney/withdrawmoney.component';
import { TransfermoneyComponent } from './transfermoney/transfermoney.component';

@NgModule({
  declarations: [
    AppComponent,
    DepositmoneyComponent,
    WithdrawmoneyComponent,
    TransfermoneyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
