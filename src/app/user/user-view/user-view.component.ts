import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserState } from '../store/reducer/user.reducer';
import { selectUsers } from '../store/selector/user.selectors';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  users$: Observable<User[]>;
  
  constructor(private store: Store<UserState>) { 
    this.users$ = this.store.pipe(select(selectUsers));
   } 

  ngOnInit(): void {
  }
}
