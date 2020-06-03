import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../model/user.type";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) {
  }

  async ngOnInit(): Promise<void> {
    await this.setUser();
  }

  async setUser(): Promise<void> {
    this.user = await this.userService.getProfile();
  }

}
