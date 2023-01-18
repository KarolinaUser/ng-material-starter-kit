import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-form',
  styleUrls: ['./login-form.component.scss'],
  templateUrl: './login-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
  readonly loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  readonly user$: Observable<void> = this._loginService.addUser({
    username: this.loginForm.get('username')?.value,
    password: this.loginForm.get('password')?.value
  });

  constructor(private _loginService: LoginService) {
  }

  onLoginFormSubmitted(loginForm: FormGroup): void {
    if (!loginForm.valid) {
      return;
    }
    this._loginService.addUser({
      username: loginForm.get('username')?.value,
      password: loginForm.get('password')?.value,
    }).subscribe();
  }


}

