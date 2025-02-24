import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.scss'
})
export class SecondComponentComponent implements OnInit{
  posts: any[] = [];

  constructor(private PostService: PostService) {}

  ngOnInit() {
    this.PostService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }
}
