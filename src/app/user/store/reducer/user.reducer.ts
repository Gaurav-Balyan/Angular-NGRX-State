import {Action, createReducer, on} from '@ngrx/store';
import * as UserActions from '../action/user.actions';
import { User } from 'src/app/models/user';

export const userFeatureKey = 'user';

export interface UserState {
  users: User[];
}

export const initialState: UserState = {
  users: [{
    firstName: 'John',
    lastName: 'Doe'
  }]
};

export const reducer = createReducer(
  initialState,
  on(UserActions.addUser,
    (state: UserState, {user}) =>
      ({
        ...state,
        users: [...state.users, user]
      }))
);

export function userReducer(state: UserState | undefined, action: Action): any {
  return reducer(state, action);
}