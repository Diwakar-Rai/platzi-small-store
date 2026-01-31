import { Component, inject } from '@angular/core';
import { AuthService, RegisterPayload } from '../../../core/auth/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private authService = inject(AuthService);
  private router = inject(Router);
  errorMessage = '';
  successMessage = '';
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    avatar: new FormControl(''),
  });

  onSubmit() {
    if (this.registerForm.invalid) return;

    this.authService.register(this.registerForm.value as RegisterPayload).subscribe({
      next: () => {
        this.successMessage = 'Registration successful. Please login.';
        this.router.navigate(['/login']);
      },
      error: () => {
        this.errorMessage = 'User already exists or invalid data';
      },
    });
  }
}
