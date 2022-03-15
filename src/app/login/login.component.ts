import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
    project: FormGroup;
    data: any;


    constructor(private router: Router) {
        
        this.project = new FormGroup({
            username: new FormControl("", Validators.required),
            password: new FormControl("", Validators.required),
        });
    }

    ngOnInit(): void {}

    onSave(project) {
        this.data = this.project.value;

        console.log(this.data);

        if(project.value.username==='c' && project.value.password==='c')
        {
            this.router.navigate(["/main/client"]);
        }
        else if(project.value.username==='ma' && project.value.password==='ma')
        {
            this.router.navigate(['/masterAdmin'])
        }
        else if(project.value.username==='aa' && project.value.password==='aa')
        {
            this.router.navigate(['/analystAdmin'])
        }
        else
        {
            alert("username or password is incorrect")
        }
    }
}
