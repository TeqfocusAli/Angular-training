import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopageComponent } from 'src/app/nopage/nopage.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: UserDetailsComponent,
  },
  // {
  //   path: 'profile',
  //   component: UserProfileComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
