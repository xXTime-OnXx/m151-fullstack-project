import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  async login() {
    await this.authService.login(this.username, this.password);
    await this.router.navigate(['overview']);
  }
}
