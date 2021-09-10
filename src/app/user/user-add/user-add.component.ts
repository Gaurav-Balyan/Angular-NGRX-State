import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { addUser } from '../store/action/user.actions';
import { UserState } from '../store/reducer/user.reducer';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  constructor(private store: Store<UserState>) {
  }

  ngOnInit(): void {
  }

  addUser(userName: string): void {
    const user = new User();
    user.firstName = userName;
    user.lastName = 'Doe';
    this.store.dispatch(addUser(user));
  }
}
