import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { JobComponent } from './job.component';
import { MatCard, MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, MatTableModule, MatCardModule],
  declarations: [JobComponent],
  providers: [],
  exports: [JobComponent]
})
export class JobComponentModule {
}
