import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  allPosts: any = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.allPost()
  }
  allPost() {
    return this.apiService.getAll().subscribe((data: any) => {
      console.log(data['hydra:member']); this.allPosts = data['hydra:member']
    }, (err: any) => {
      console.log(err);
    });
  }
}

