import { Injectable } from '@angular/core';
import { IBankdata } from '../assets/data/bankdata';

@Injectable({
  providedIn: 'root'
})
export class BankdataserviceService {

  constructor() { }
  
  getbankdata() : IBankdata[]{
    return[
      {
        "accountId": 1000001,
        "accountName": "ais",
        "accountSurname": "somone",
        "moneyAmount": 100
      },
      {
        "accountId": 1000002,
        "accountName": "ais2",
        "accountSurname": "somone2",
        "moneyAmount": 200
      },
      {
        "accountId": 1000003,
        "accountName": "ais",
        "accountSurname": "somone23",
        "moneyAmount": 300
      },

    ]
  }
}
