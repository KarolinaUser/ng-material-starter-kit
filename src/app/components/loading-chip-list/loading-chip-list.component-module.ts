import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingChipListComponent } from './loading-chip-list.component';

@NgModule({
  imports: [MatChipsModule, CommonModule, MatProgressSpinnerModule],
  declarations: [LoadingChipListComponent],
  providers: [],
  exports: [LoadingChipListComponent]
})
export class LoadingChipListComponentModule {
}
