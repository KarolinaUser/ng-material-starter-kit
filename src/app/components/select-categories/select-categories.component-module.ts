import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SelectCategoriesComponent } from './select-categories.component';

@NgModule({
  imports: [CommonModule, MatListModule, MatProgressSpinnerModule],
  declarations: [SelectCategoriesComponent],
  providers: [],
  exports: [SelectCategoriesComponent]
})
export class SelectCategoriesComponentModule {
}
