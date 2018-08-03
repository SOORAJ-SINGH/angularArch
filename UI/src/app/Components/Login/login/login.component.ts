import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   UserName: string;
   Password: string;
  constructor(private loginService: LoginService, private route: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.checkLogin().subscribe((result) => {
      debugger;
     if(result) {
      this.route.navigate(['home']);
     }
    });
  }

}
