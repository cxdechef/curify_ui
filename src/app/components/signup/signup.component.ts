import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import ValidateForm from 'src/app/extensions/validateform';
import { SignupUser } from 'src/app/models/signup-user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  user: SignupUser = new SignupUser();
  signupForm!: FormGroup;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.authService.signupUser(this.user).subscribe({
        next: (response) => {
          console.log('User created successfully:', response);
        },
      });
      console.log('Successful!', this.signupForm.value);
    } else {
      console.log('Error!');
      ValidateForm.validateAllFields(this.signupForm);
    }
  }
}
