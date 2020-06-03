import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username = '';
  password = '';

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  async register() {
    await this.authService.register(this.username, this.password);
  }
}
