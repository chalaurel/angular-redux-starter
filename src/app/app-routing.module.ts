import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { userDataComponent } from './pages/user/user.component';

const routes: Routes = [
  {
    path: 'user',
    component: userDataComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
