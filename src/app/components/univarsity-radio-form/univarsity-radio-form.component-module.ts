import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { UnivarsityRadioFormComponent } from './univarsity-radio-form.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatRadioModule],
  declarations: [UnivarsityRadioFormComponent],
  providers: [],
  exports: [UnivarsityRadioFormComponent]
})
export class UnivarsityRadioFormComponentModule {
}
