import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  profileSubmit = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  // console.log("profiles :", profileSubmit)

}
