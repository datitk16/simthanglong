import { IPAddress } from './../models/ip-address.model';
import { Component, OnInit } from '@angular/core';
import { IpService } from '../services/ip.service';
import { addDoc, collection, Firestore, } from '@angular/fire/firestore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private iPAddress = new IPAddress();
  constructor(
    private ipService: IpService,
    private firestore: Firestore,
  ) { }

  ngOnInit(): void {
    this.ipService.getIp().subscribe(x => {
      this.addIpAddress(x.body as IPAddress);
    })
  }

  async addIpAddress(ipAddressResponse: IPAddress) {
    this.iPAddress = Object.assign({}, ipAddressResponse)
    const usersRef = collection(this.firestore, 'ipAddress');
    await addDoc(usersRef, this.iPAddress);
  }

}
