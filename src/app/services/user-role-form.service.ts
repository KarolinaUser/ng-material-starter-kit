import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRoleFormModel } from '../models/user-role-form.model';

@Injectable({ providedIn: 'root' })
export class UserRoleFormService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllRole(): Observable<UserRoleFormModel[]> {
    return this._httpClient.get<UserRoleFormModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/roles');
  }
}
