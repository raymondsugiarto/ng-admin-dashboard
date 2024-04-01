import { Component, inject, AfterViewInit, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './user.service';
import {MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatTableModule],
  templateUrl: './user.component.html',
  // styleUrl: './app.component.scss'
})
export class UserComponent implements OnInit {
  title = 'user';

  data: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'phone', 'username', 'website'];

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: any) => {
      this.data = data;
    });
  }


}
