import { NgModule } from '@angular/core';
import { Home } from './home/home';
import { Routes, RouterModule } from '@angular/router';
import { NewTask } from './new-task/new-task';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'new', component: NewTask}
];
@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class HomeTaskRoutingModule {}
