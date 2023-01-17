import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { ListExercisesComponent } from './list-exercises.component';

@NgModule({
  imports: [CommonModule, MatListModule, MatChipsModule, MatCheckboxModule, MatCardModule, MatButtonModule, MatMenuModule, MatFormFieldModule, MatRadioModule, ReactiveFormsModule, MatSelectModule, MatOptionModule, MatTableModule],
  declarations: [ListExercisesComponent],
  providers: [],
  exports: [ListExercisesComponent]
})
export class ListExercisesComponentModule {
}
