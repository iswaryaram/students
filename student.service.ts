import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url = '';

  constructor(private httpClient: HttpClient) {}

  public getAllStudentsService() {
    return this.httpClient.get(this.url);
  }
}
