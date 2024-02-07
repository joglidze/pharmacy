import { Component } from '@angular/core';
import {
  Form,
  FormControl,
  FormGroup,
  FormGroupName,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  form: FormGroup = new FormGroup({
    mobileNumber: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  onSubmit(form: FormGroup) {
    console.log(form.value);
  }
}
