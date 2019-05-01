import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AuthService } from "../shared/services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CapacitorService} from "../shared/services/capacitor.service";
import {ResistorService} from "../shared/services/resistor.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [AuthService]
})
export class LoginComponent implements OnInit {

    form: FormGroup;

    username: string;
    password: string;

    constructor(private authService: AuthService,
                private router: Router) {}

    ngOnInit() {
    }

    onLogin() {
      if (this.username && this.password) {
        this.authService.login(this.username, this.password)
          .subscribe(
            () => {
              console.log("User is logged in");
              this.router.navigate(['/combinator']);
            }
          );
      }
    }

  logout() {
    this.authService.logout();
  }

  public get loggedIn(): boolean{
    return this.authService.isLoggedIn();
  }
/*
  register(email:string, password:string) {
    return this.httpClient.post<{access_token: string}>('http://www.your-server.com/auth/register', {email, password}).pipe(tap(res => {
      this.login(email, password)
    }))
  }
*/

}
