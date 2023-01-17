import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HollydayModel } from '../models/hollyday.model';

@Injectable({ providedIn: 'root' })
export class HollydayService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<HollydayModel[]> {
    return this._httpClient.get<HollydayModel[]>('https://date.nager.at/api/v2/publicholidays/2020/US');
  }
}
