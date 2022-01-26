import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  createData(): void {}

  getData(): void {}

  updateData(): void {}

  deletData(): void {}

}
