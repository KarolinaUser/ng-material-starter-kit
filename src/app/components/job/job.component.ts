import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { JobModel } from 'src/app/models/job.model';
import { TagsModel } from '../../models/tags.model';
import { TagsService } from '../../services/tags.service';

@Component({
  selector: 'app-job',
  styleUrls: ['./job.component.scss'],
  templateUrl: './job.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobComponent {


  readonly job$: Observable<JobModel[]> = this._tagsService.getAll();

  readonly tagi$: Observable<TagsModel[]> = this._tagsService.getTags();

  constructor(private _tagsService: TagsService) {
  }

}
