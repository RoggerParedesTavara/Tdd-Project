import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUsersResponse } from '../types/IUsersResponse';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUsersResponse[]>{
    return this.http.get<IUsersResponse[]>(environment.usersUrl);
  }
}
