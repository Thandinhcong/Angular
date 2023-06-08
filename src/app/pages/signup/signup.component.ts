import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { AuthService } from 'src/app/services/auth.service';
import { ROUTES, Router } from "@angular/router"
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  submitted: boolean = false;

  formSignup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.minLength(6)]],
    confirmPassWord: ['', [Validators.required]],
  }, { validators: this.checkPassword })

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { }

  checkPassword(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassWord = group.get('confirmPassWord')?.value;
    if (password === confirmPassWord) {
      return null;
    }
    return { notMatch: true }
  }

  onHandleSubmit() {
    this.submitted = true;
    if (this.formSignup.valid) {
      const email = this.formSignup.value.email;

      // Gọi AuthService để kiểm tra tài khoản đã tồn tại hay chưa
      this.auth.checkAccountExists(email).subscribe(
        (response) => {
          if (response.length > 0) {
            // Tài khoản đã tồn tại
            alert('Tài khoản đã tồn tại');
          } else {
            // Tài khoản chưa tồn tại, tiếp tục đăng kí
            this.auth.signup(this.formSignup.value).subscribe(
              (data) => {
                alert('Đăng kí thành công');
                // Thực hiện các hành động khác sau khi đăng kí thành công
                this.router.navigate(['/signin'])
              },
              (error) => {
                console.error('Đăng kí thất bại', error);
                // Xử lý lỗi khi đăng kí thất bại
              }
            );
          }
        },
        (error) => {
          console.error('Lỗi kiểm tra tài khoản', error);
          // Xử lý lỗi khi kiểm tra tài khoản
        }
      );
    }
  }
}
