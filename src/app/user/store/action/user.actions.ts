import { createAction } from '@ngrx/store';
import { User } from 'src/app/models/user';

export const addUser = createAction(
  '[User] Load Users',
  (user: User) => ({user})
);




