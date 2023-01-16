import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ListExercisesComponent } from './list-exercises.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [CommonModule, MatListModule, MatChipsModule, MatCheckboxModule, MatCardModule ],
  declarations: [ListExercisesComponent],
  providers: [],
  exports: [ListExercisesComponent]
})
export class ListExercisesComponentModule {
}
