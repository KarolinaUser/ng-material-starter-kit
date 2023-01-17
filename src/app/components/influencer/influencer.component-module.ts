import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { InfluencerComponent } from './influencer.component';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  imports: [CommonModule, MatListModule, MatChipsModule ],
  declarations: [InfluencerComponent],
  providers: [],
  exports: [InfluencerComponent]
})
export class InfluencerComponentModule {
}
