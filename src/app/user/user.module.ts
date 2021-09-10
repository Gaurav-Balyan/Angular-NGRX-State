import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserViewComponent } from './user-view/user-view.component';
import { StoreModule } from '@ngrx/store';
import { userFeatureKey, userReducer } from './store/reducer/user.reducer';
import { UserAddComponent } from './user-add/user-add.component';

@NgModule({
  declarations: [
    UserViewComponent,
    UserAddComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(userFeatureKey, userReducer),
  ],
  exports: [
    UserViewComponent,
    UserAddComponent
  ]
})
export class UserModule { }
