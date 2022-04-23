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
  user = new User();
  isSuccess: boolean;
  constructor(
    private firestore: Firestore,
  ) { }

  ngOnInit(): void {
  }

  submit() {
    this.addUser(this.user).then(() => {
      this.isSuccess = true;
      setTimeout(() => {
        this.user = new User();
        this.isSuccess = false;
      }, 3000)
    })
  }

  async addUser(user: User) {
    this.user = Object.assign({}, user)
    const usersRef = collection(this.firestore, 'users');
    await addDoc(usersRef, this.user);
  }
}
