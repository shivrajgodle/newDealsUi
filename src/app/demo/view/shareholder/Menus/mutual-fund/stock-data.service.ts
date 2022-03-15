import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {
  
  title = 'stockanalysis';

  stockanalysisData:any;
  
  stockChartXValuesFunction:any[] = [];
  stockChartYValuesFunction:any[] = [];

   API_KEY = "NTF74MI5KK8UO5J2";
   stockSymbol = "FB";

  constructor(private http: HttpClient) { }

  getStockData(){
    //  fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.stockSymbol}&outputsize=compact&apikey=${this.API_KEY}`)
    // .then(response=>response.json())
    // .then(data=>{
    //     for (var key in data["Time Series (Daily)"]) {
    //       this.stockChartXValuesFunction.push(key); 
    //       this.stockChartYValuesFunction.push(data["Time Series (Daily)"][key]["1. open"]);
    //       console.log("It isss wt it isss"+data);
    //       console.log("X values function"+ this.stockChartXValuesFunction);
    //       console.log("Y values function"+ this.stockChartYValuesFunction);
        
          
      //   }
        
      // })
       
    }
}
