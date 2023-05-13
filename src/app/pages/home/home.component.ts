import { Component } from '@angular/core';
import { IUser } from 'src/common/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  User: IUser = {
    name: "Đinh Công Thản",
    maSV: "PH26474",
    age: 25,
    gender: "Nam",
  }
  handelNoti = () => {
    alert("hello bạn nhỏ =)))");
  }
}
