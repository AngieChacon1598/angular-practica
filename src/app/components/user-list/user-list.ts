import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.scss'],
  imports: [CommonModule]
})
export class UserList {
  @Input() users: any[] = [];
}
