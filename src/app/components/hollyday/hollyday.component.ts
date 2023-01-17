import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { HollydayModel } from '../../models/hollyday.model';
import { HollydayService } from '../../services/hollyday.service';

@Component({
  selector: 'app-hollyday',
  styleUrls: ['./hollyday.component.scss'],
  templateUrl: './hollyday.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HollydayComponent {
  
  readonly hollyday$: Observable<HollydayModel[]> = this._hollydayService.getAll();

  constructor(private _hollydayService: HollydayService) {
  }
}
