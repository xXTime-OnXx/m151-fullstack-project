import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../type/user.type";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  public async getProfile(): Promise<User> {
    return await this.http.get<User>(environment.host + 'app/profile').toPromise();
  }
}
