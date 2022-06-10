import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPAddress } from '../models/ip-address.model';

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor(private httpClient: HttpClient) { }

  getIp(): Observable<HttpResponse<IPAddress>> {
    return this.httpClient.get<IPAddress>('https://sim-thang-long-backend.herokuapp.com/IPAddress', {observe: 'response'});
  }

}
