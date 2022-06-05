import { IPAddress } from './../models/ip-address.model';
import { Component, OnInit } from '@angular/core';
import { IpService } from '../services/ip.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private iPAddress = new IPAddress();
  constructor(
    private ipService: IpService
  ) { }

  ngOnInit(): void {
    this.ipService.getIp().subscribe(x => {
      this.iPAddress = x.body as IPAddress;
      console.log(this.iPAddress)
    })

  }

}
