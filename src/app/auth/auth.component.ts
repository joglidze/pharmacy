import { Component } from '@angular/core';
import {
  Form,
  FormControl,
  FormGroup,
  FormGroupName,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../../core/interceptor/auth.interceptor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  form: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  error: boolean = false;
  constructor(
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}
  onSubmit(form: FormGroup) {
    console.log(form.value);

    return this.authService.loginIn(form.value).subscribe(
      (res: any) => {
        this.localStorageService.setlocalStorage(res);
        this.router.navigateByUrl('main');
      },
      (error) => {
        console.error('An error occurred:', error);
        this.error = true;
      }
    );
  }
}
