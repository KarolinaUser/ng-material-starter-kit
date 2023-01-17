import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductLoadingListComponent } from './product-loading-list.component';

@NgModule({
  imports: [CommonModule, MatListModule, MatProgressSpinnerModule],
  declarations: [ProductLoadingListComponent],
  providers: [],
  exports: [ProductLoadingListComponent]
})
export class ProductLoadingListComponentModule {
}
