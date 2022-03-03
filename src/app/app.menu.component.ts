import { Component, OnInit } from "@angular/core";
import { AppMainComponent } from "./app.main.component";

@Component({
    selector: "app-menu",
    template: `
        <ul class="layout-menu">
            <li
                app-menuitem
                *ngFor="let item of model; let i = index"
                [item]="item"
                [index]="i"
                [root]="true"
            ></li>
        </ul>
    `,
})
export class AppMenuComponent implements OnInit {
    model: any[];

    constructor(public app: AppMainComponent) {}

    ngOnInit() {
        this.model = [
            // {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/']},
            {
                label: "Shareholder Analysis",
                icon: "pi pi-fw pi-star",
                routerLink: ["/home"],
                items: [
                    {
                        label: "Shareholder Pattern by Category",
                        icon: "pi pi-fw pi-check-square",
                        routerLink: ["/main/uikit/dataRequest"],
                    },
                    {
                        label: "Mutual Funds",
                        icon: "pi pi-fw pi-check-square",
                        routerLink: ["/main/client/mutualFund"],
                    },
                    {
                        label: "FII / FPI",
                        icon: "pi pi-fw pi-check-square",
                        routerLink: ["/main/uikit/dataUpload"],
                    },
                    {
                        label: "OBC",
                        icon: "pi pi-fw pi-check-square",
                        routerLink: ["/main/uikit/dataUpload"],
                    },
                    {
                        label: "Entries",
                        icon: "pi pi-fw pi-check-square",
                        routerLink: ["/main/uikit/dataUpload"],
                    },
                    {
                        label: "Exits",
                        icon: "pi pi-fw pi-check-square",
                        routerLink: ["/main/uikit/dataUpload"],
                    },
                    {
                        label: "Buyers / Sellers",
                        icon: "pi pi-fw pi-check-square",
                        routerLink: ["/main/uikit/dataUpload"],
                    },
                    {
                        label: "All / combination",
                        icon: "pi pi-fw pi-check-square",
                        routerLink: ["/main/uikit/dataUpload"],
                    },
                ],
            },
            {
                label: "Pre / Post Earnings",
                icon: "pi pi-fw pi-id-card",
                routerLink: ["/main/"],
                items: [
                    {
                        label: "Pre-Earnings Estimate",
                        icon: "pi pi-fw pi-check-square",
                        routerLink: ["/main/uikit/dataRequest"],
                    },
                    {
                        label: "Post-Earnings Estimate",
                        icon: "pi pi-fw pi-check-square",
                        routerLink: ["/main/uikit/dataUpload"],
                    },
                ],
            },
            {
                label: "Meetings",
                icon: "pi pi-fw pi-check-square",
                routerLink: ["/main/uikit/dataRequest"],
                items: [
                    {
                        label: "Initial Investors",
                        icon: "pi pi-fw pi-check-square",
                        routerLink: ["/main/uikit/dataRequest"],
                    },
                    {
                        label: "Conversions",
                        icon: "pi pi-fw pi-check-square",
                        routerLink: ["/main/uikit/dataUpload"],
                    },
                    {
                        label: "Not Invested for FII",
                        icon: "pi pi-fw pi-check-square",
                        routerLink: ["/main/uikit/dataUpload"],
                    },
                    {
                        label: "Domestic MF",
                        icon: "pi pi-fw pi-check-square",
                        routerLink: ["/main/uikit/dataUpload"],
                    },
                    {
                        label: "Other Bodies Corporate",
                        icon: "pi pi-fw pi-check-square",
                        routerLink: ["/main/uikit/dataUpload"],
                    },
                ],
            },
            {
                label: "Peer Analysis",
                icon: "pi pi-fw pi-id-card",
                routerLink: ["/main/uikit/walkthrough"],
                items: [
                    {
                        label: "Trend Analysis",
                        icon: "pi pi-fw pi-check-square",
                        routerLink: ["/main/uikit/dataRequest"],
                    },
                    
                ],
            },
            {
                label: "Document Repository",
                icon: "pi pi-fw pi-id-card",
                routerLink: ["/main/uikit/report"],
                items: [
                    {
                        label: "PwC collaterals",
                        icon: "pi pi-fw pi-check-square",
                        routerLink: ["/main/uikit/dataRequest"],
                    },
                    {
                        label: "Research Reports",
                        icon: "pi pi-fw pi-check-square",
                        routerLink: ["/main/uikit/dataUpload"],
                    },
                    {
                        label: "Other IR collaterals",
                        icon: "pi pi-fw pi-check-square",
                        routerLink: ["/main/uikit/dataUpload"],
                    },
                ],
            },
            {
                label: "Board Meeting widget",
                icon: "pi pi-fw pi-id-card",
                routerLink: ["/main/uikit/report"],
                
            },
        ];
    }
}
