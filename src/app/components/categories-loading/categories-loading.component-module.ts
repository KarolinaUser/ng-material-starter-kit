import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CategoriesLoadingComponent } from './categories-loading.component';

@NgModule({
  imports: [CommonModule, MatCheckboxModule, MatProgressSpinnerModule],
  declarations: [CategoriesLoadingComponent],
  providers: [],
  exports: [CategoriesLoadingComponent]
})
export class CategoriesLoadingComponentModule {
}
