import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListModel } from '../models/list.model';

@Injectable({ providedIn: 'root' })
export class ListsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ListModel[]> {
    return this._httpClient.get<ListModel[]>('https://api2.binance.com/api/v3/ticker/24hr');
  }
}
