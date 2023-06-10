import { Component } from '@angular/core';
import { IUser } from 'src/common/user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  handelNoti = () => {
    alert("hello bạn nhỏ =)))");
  }
}
