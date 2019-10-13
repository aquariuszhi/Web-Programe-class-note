import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //可帶入參數
  login(): void {
    this.router.navigate([''], {
      queryParams: {
        name: 'Leo'
      }
    });
  }
}
