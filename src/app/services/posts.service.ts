import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getAll = () => {
    const strPosts = localStorage.getItem('posts');
    if(strPosts){
      return JSON.parse(strPosts);
    } 
    return strPosts
  }

  saveAll = (posts: Post[]) => localStorage.setItem('posts', JSON.stringify(posts));

}
