import { User } from './../models/user.model';
import { Component, OnInit } from '@angular/core';
import { addDoc, collection, Firestore, } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  item$: Observable<any[]>;
  user = new User();
  constructor(
    private firestore: Firestore,
  ) { }

  ngOnInit(): void {
  }

  submit() {
    this.addUser(this.user).then(() => { })
  }

  async addUser(user: User) {
    this.user = Object.assign({}, user)
    const usersRef = collection(this.firestore, 'users');
    await addDoc(usersRef, this.user);
  }
}
