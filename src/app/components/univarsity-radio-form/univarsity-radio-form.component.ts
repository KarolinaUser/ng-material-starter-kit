import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { UnivarsityModel } from '../../models/univarsity.model';
import { UniversitiesService } from '../../services/universities.service';

@Component({
  selector: 'app-univarsity-radio-form',
  styleUrls: ['./univarsity-radio-form.component.scss'],
  templateUrl: './univarsity-radio-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnivarsityRadioFormComponent {
  readonly universityForm: FormGroup = new FormGroup({
    university: new FormControl()
  });

  readonly polishUniversities$: Observable<UnivarsityModel[]> = this._universitiesService.getAll();

  constructor(private _universitiesService: UniversitiesService) {
  }

  onUniversityFormSubmitted(universityForm: FormGroup): void {
  }
}
