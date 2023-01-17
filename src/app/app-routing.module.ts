import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListExercisesComponent } from './components/list-exercises/list-exercises.component';
import { HollydayComponent } from './components/hollyday/hollyday.component';
import { ListExercisesComponentModule } from './components/list-exercises/list-exercises.component-module';
import { HollydayComponentModule } from './components/hollyday/hollyday.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'lists', component: ListExercisesComponent }, { path: 'public-holidays', component: HollydayComponent }]), ListExercisesComponentModule, HollydayComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
