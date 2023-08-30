import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  httpClient = inject(HttpClient);
  createUser(user: any) {
    return this.httpClient.post('http://localhost:3000/users/create', user);
  }
}
