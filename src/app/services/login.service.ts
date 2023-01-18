import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListModel } from '../models/list.model';
import { LoginModel } from '../models/login.model';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private _httpClient: HttpClient) {
  }

  addUser(user: LoginModel): Observable<void> {
    return this._httpClient.post<void>('https://fakestoreapi.com/auth/login', user);
  }
}
