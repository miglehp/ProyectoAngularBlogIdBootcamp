import { Component, inject } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';
// import { POSTS } from 'src/assets/db/posts.db'; // descomentar esto la primera vez para tener posts en el local storage

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.scss']
})
export class ListaPostsComponent {
  
  _postService = inject(PostsService);

  posts: Post[] | null = null;

  constructor(){

  }

  ngOnInit(){
    // this._postService.saveAll(POSTS) // correr este codigo la primera vez para tener posts en el local storage
    this.posts = this.getPosts();
    this.posts?.reverse();
  }

  getPosts(): Post[] | null {
    return this._postService.getAll();
  }


}
