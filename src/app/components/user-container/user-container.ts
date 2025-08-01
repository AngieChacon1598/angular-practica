import { Component } from '@angular/core';
import { UserList } from '../user-list/user-list';

@Component({
  selector: 'app-user-container',
  standalone: true,
  templateUrl: './user-container.html',
  styleUrls: ['./user-container.scss'],
  imports: [UserList]
})
export class UserContainer {
  users = [
    { name: 'Juan', age: 25 },
    { name: 'Ana', age: 30 },
    { name: 'Luis', age: 22 }
  ];
}
