import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  public async register(username: string, password: string): Promise<void> {
    await this.http.post(environment.host + 'auth/register', {
      username: username,
      password: password
    }).toPromise();
  }

  public async login(username: string, password: string): Promise<void> {
    let result
    try {
      result = await this.http.post(environment.host + 'auth/login', {
        username: username,
        password: password
      }).toPromise();
    } catch (e) {
      console.error(e);
    }

    await localStorage.setItem(environment.bearer_token, result.access_token);
  }
}
