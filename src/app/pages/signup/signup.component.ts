import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private fb: FormBuilder,
    private auth: AuthService
  ) { }
  formSignup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmPassWord: ['']
  }, { validators: this.checkPassword })
  checkPassword(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassWord = group.get('confirmPassWord')?.value;
    if (password === confirmPassWord) {
      return null
    }
    return { mismatch: true }
  }

  onHandleSubmit() {
    if (this.formSignup.valid) {
      this.auth.signup(this.formSignup.value).subscribe(data => {
        console.log({ data });
      })
    }
  }
}
