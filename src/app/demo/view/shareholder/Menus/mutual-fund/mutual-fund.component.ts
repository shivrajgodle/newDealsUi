import { Component, OnInit } from "@angular/core";
import { window } from "rxjs/operators";
import { StockDataService } from "./stock-data.service";

@Component({
    selector: "app-mutual-fund",
    templateUrl: "./mutual-fund.component.html",
    styleUrls: ["./mutual-fund.component.scss"],
})
export class MutualFundComponent {
    name: any;
    tableData: any[];

    date: any;
    price: any;
    // cols!: any[];
    title = "stockanalysis";

    stockanalysisData: any;

    constructor() {}

    stockChartXValuesFunction: any[] = [];
    stockChartYValuesFunction: any[] = [];
    stockChartHValuesFunction: any[] = [];
    stockChartLValuesFunction: any[] = [];
    stockChartCValuesFunction: any[] = [];
    stockChartVValuesFunction: any[] = [];

    API_KEY = "NTF74MI5KK8UO5J2";
    stockSymbol: "";

    ngOnInit(): void {
        console.log("in init");

        //fetching data from api
        //free api from Alpha Vantage

        // this.cols = [
        //   { field: 'open', header: 'Open' },
        //   { field: 'high', header: 'High' },
        //   { field: 'low', header: 'Low' },
        //   { field: 'close', header: 'Close' },
        //   { field: 'volume', header: 'Volume' },

        // ];
    }

    clear() {
        this.stockChartXValuesFunction.length = null;
        this.stockChartYValuesFunction.length = null;
        this.stockChartHValuesFunction.length = null;
        this.stockChartLValuesFunction.length = null;
        this.stockChartCValuesFunction.length = null;
        this.stockChartVValuesFunction.length = null;
    }
    sendStock(stockSymbol) {

        console.log("send Stock called", stockSymbol);

        fetch(
            `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&outputsize=compact&apikey=${this.API_KEY}`
        )
            .then((response) => response.json())
            .then((data) => {
                // this.tableData = data;
                //              this.tableData=data['Time Series (Daily)'][0];

                // console.log(this.tableData[1],"akshayyyy");

                for (var key in data["Time Series (Daily)"]) {
                    //   this.tableData[key].push(data["Time Series (Daily)"][key]);
                    this.stockChartXValuesFunction.push(key);

                    this.stockChartYValuesFunction.push(
                        data["Time Series (Daily)"][key]["1. open"]
                    );

                    this.stockChartHValuesFunction.push(
                        data["Time Series (Daily)"][key]["2. high"]
                    );

                    this.stockChartLValuesFunction.push(
                        data["Time Series (Daily)"][key]["3. low"]
                    );

                    this.stockChartCValuesFunction.push(
                        data["Time Series (Daily)"][key]["4. close"]
                    );

                    this.stockChartVValuesFunction.push(
                        data["Time Series (Daily)"][key]["5. volume"]
                    );
                }
                console.log(data);
            });
            this.clear();
    }

    //code for graph drawing
    public graph = {
        data: [
            {
                x: this.stockChartXValuesFunction,
                y: this.stockChartYValuesFunction,
                type: "scatter",
                mode: "lines+points",
                marker: { color: "red" },
            },
            // { x: this.stockChartXValuesFunction, y: this.stockChartYValuesFunction, type: 'bar' },
        ],
        layout: { width: 1520, height: 540, title: "" },
    };
}
