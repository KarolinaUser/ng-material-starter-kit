import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-example',
  styleUrls: ['./forms-example.component.scss'],
  templateUrl: './forms-example.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormsExampleComponent {

  readonly formName: FormGroup = new FormGroup({

    name: new FormControl('', [Validators.required, Validators.minLength(3)])

  });
  onFormNameSubmitted(formName: FormGroup): void {
    console.log(formName.value)

  }


  readonly age: FormGroup = new FormGroup({
    age: new FormControl('18', [Validators.required, Validators.min(18)])
  });
  onAgeSubmitted(age: FormGroup): void {
  }


  readonly emailForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9]+@[a-z0-9.-]+\\.[a-z]{2,}$')])
  });

  onEmailFormSubmitted(emailForm: FormGroup): void {
  }
}
