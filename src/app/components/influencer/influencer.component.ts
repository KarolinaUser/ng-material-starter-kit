import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { InfluencerModel } from '../../models/influencer.model';
import { InfluencerService } from '../../services/influencer.service';

@Component({
  selector: 'app-influencer',
  styleUrls: ['./influencer.component.scss'],
  templateUrl: './influencer.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfluencerComponent {
  
  readonly influencer$: Observable<InfluencerModel[]> = this._influencerService.getAll();

  constructor(private _influencerService: InfluencerService) {
  }
}
