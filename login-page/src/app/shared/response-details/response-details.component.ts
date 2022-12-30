import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-response-details',
  templateUrl: './response-details.component.html',
  styleUrls: ['./response-details.component.css']
})
export class ResponseDetailsComponent implements OnInit {
  id: any;
  //getPostsDetails: any = [];
  data: any;

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.id = params['displayMode'];
      console.log('display = '+ this.id)
    });
    switch(this.id){
      case 'getPosts':
        this.getPosts();break;
      case 'getPosts1':
        this.getPosts1();break;
      case 'postPosts':
        this.postPosts();break;
      case 'putPosts':
        this.putPosts();break;
      case 'deletePost':
        this.deletePost();
    }
  }

  constructor(private route: ActivatedRoute,
    private userService: UserDetailsService) {
  }


  getPosts(): void {
    this.userService.getPosts()
      .subscribe((data: any) => {
        console.log(JSON.stringify(data));
        this.data = JSON.stringify(data);

      });
  }
  getPosts1(): void {
    this.userService.getPosts1()
      .subscribe((data: any) => {
        console.log(JSON.stringify(data));
        this.data = JSON.stringify(data);

      });
  }
  postPosts(): void {
    let post ={"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"};
    this.userService.postPosts(post)
      .subscribe((data: any) => {
        console.log(JSON.stringify(data));
        this.data = JSON.stringify(data);

      });
  }
  putPosts(): void {
    let post ={"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"};
    this.userService.putPosts(post)
      .subscribe((data: any) => {
        console.log(JSON.stringify(data));
        this.data = JSON.stringify(data);

      });
  }
  deletePost(): void {
    let post ={"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"};
    this.userService.deletePost(post)
      .subscribe((data: any) => {
        console.log(JSON.stringify(data));
        this.data = JSON.stringify(data);

      });
  }
}
