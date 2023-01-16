import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { ListExercisesComponent } from './list-exercises.component';

@NgModule({
  imports: [CommonModule, MatListModule, MatChipsModule],
  declarations: [ListExercisesComponent],
  providers: [],
  exports: [ListExercisesComponent]
})
export class ListExercisesComponentModule {
}
