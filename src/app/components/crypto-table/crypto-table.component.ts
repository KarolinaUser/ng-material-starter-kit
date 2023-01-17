import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ListModel } from '../../models/list.model';
import { ListsService } from '../../services/lists.service';

@Component({
  selector: 'app-crypto-table',
  styleUrls: ['./crypto-table.component.scss'],
  templateUrl: './crypto-table.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoTableComponent {
  readonly cryptoTable$: Observable<ListModel[]> = this._listsService.getAll();

  constructor(private _listsService: ListsService) {
  }
}
