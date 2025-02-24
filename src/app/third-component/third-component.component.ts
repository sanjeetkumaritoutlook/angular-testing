import { Component,OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrl: './third-component.component.scss'
})
export class ThirdComponentComponent implements OnInit {

  posts: any[] = [];
  
   constructor(private userService: UserService) { }
  
  ngOnInit() {
      this.userService.getPosts().subscribe((data) => {
        this.posts = data;
      });
    }
  getUser() {
    this.userService.getUser();
  }
}
