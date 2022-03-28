import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  serviceMsg!: string;
  private url = 'http://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {}
  serviceText: string = 'Server text from servic';

  getUsers() {
    return this.httpClient.get(this.url);
  }
  login(auth: boolean) {
    return auth;
  }

  setMessage = (data: string) => {
    this.serviceMsg = data;
  };
  getMessage = () => {
    return this.serviceMsg;
  };
}
