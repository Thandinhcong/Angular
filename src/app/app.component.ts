import { Component } from '@angular/core';
import { IUser } from 'src/common/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  User: IUser = {
    name: "Đinh Công Thản",
    maSV: "PH26474",
    age: 25,
    gender: "Nam",
  }

}
