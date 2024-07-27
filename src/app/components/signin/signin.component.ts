import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/extensions/validateform';
import { SigninUser } from 'src/app/models/signin-user';
import { AuthService } from 'src/app/services/auth.service';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  signinUser: SigninUser = new SigninUser();
  signinForm!: FormGroup;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userDetails: UserDetailsService
  ) {}

  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signinForm.valid) {
      this.authService.signinUser(this.signinUser).subscribe({
        next: (response) => {
          console.log('User signed in successfully:', response.message);
          this.signinForm.reset();
          this.authService.storeToken(response.token);
          const tokenPayload = this.authService.decodedToken();
          this.userDetails.setFullName(tokenPayload.unique_name);
          this.userDetails.setRole(tokenPayload.role);
          this.router.navigate(['dashboard']);
        },
      });
    } else {
      console.log('Error!');
      ValidateForm.validateAllFields(this.signinForm);
    }
  }
}
