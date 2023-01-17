import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HollydayComponent } from './hollyday.component';

@NgModule({
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatOptionModule, MatProgressBarModule],
  declarations: [HollydayComponent],
  providers: [],
  exports: [HollydayComponent]
})
export class HollydayComponentModule {
}
