import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { CryptoTableComponent } from './crypto-table.component';

@NgModule({
  imports: [CommonModule, MatTableModule],
  declarations: [CryptoTableComponent],
  providers: [],
  exports: [CryptoTableComponent]
})
export class CryptoTableComponentModule {
}
