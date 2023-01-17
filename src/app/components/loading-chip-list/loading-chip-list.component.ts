import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ListModel } from '../../models/list.model';
import { ListsService } from '../../services/lists.service';

@Component({
  selector: 'app-loading-chip-list',
  styleUrls: ['./loading-chip-list.component.scss'],
  templateUrl: './loading-chip-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingChipListComponent {
  readonly chipList$: Observable<ListModel[]> = this._listsService.getAll()
  // .pipe(map(() => []
  // ))
  ;

  constructor(private _listsService: ListsService) {
  }
}
