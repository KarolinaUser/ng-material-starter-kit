import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnivarsityModel } from '../models/univarsity.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UniversitiesService {

    constructor(private _httpClient: HttpClient) {
    }


    getAll(): Observable<UnivarsityModel[]> {
        return this._httpClient.get<UnivarsityModel[]>("http://universities.hipolabs.com/search?country=Poland");
      }
}
