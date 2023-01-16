import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListExercisesComponent } from './components/list-exercises/list-exercises.component';
import { ListExercisesComponentModule } from './components/list-exercises/list-exercises.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'lists', component: ListExercisesComponent }]), ListExercisesComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
