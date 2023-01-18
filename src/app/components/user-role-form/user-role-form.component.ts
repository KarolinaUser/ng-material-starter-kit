import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserRoleFormModel } from 'src/app/models/user-role-form.model';
import { UserRoleFormService } from '../../services/user-role-form.service';

@Component({
  selector: 'app-user-role-form',
  styleUrls: ['./user-role-form.component.scss'],
  templateUrl: './user-role-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserRoleFormComponent {
  readonly userRole: FormGroup = new FormGroup({
    role: new FormControl(),
  });
  readonly useRole$: Observable<UserRoleFormModel[]> = this._userRoleFormService.getAllRole();

  constructor(private _userRoleFormService: UserRoleFormService) {
  }

  onUserRoleSubmitted(userRole: FormGroup): void {
  }
}
