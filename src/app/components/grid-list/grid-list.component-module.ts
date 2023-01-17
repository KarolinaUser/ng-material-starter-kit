import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { GridListComponent } from './grid-list.component';

@NgModule({
  imports: [CommonModule, MatGridListModule, MatCardModule],
  declarations: [GridListComponent],
  providers: [],
  exports: [GridListComponent]
})
export class GridListComponentModule {
}
