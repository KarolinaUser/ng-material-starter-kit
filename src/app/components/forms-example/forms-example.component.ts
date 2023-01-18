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
}
