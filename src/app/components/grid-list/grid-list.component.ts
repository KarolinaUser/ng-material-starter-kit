import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { JobModel } from '../../models/job.model';
import { TagsService } from '../../services/tags.service';

@Component({
  selector: 'app-grid-list',
  styleUrls: ['./grid-list.component.scss'],
  templateUrl: './grid-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridListComponent {
  
  readonly gridList$: Observable<JobModel[]> = this._tagsService.getAll();

  constructor(private _tagsService: TagsService) {
  }
}
