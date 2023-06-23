import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-form-posts',
  templateUrl: './form-posts.component.html',
  styleUrls: ['./form-posts.component.scss'],
})
export class FormPostsComponent {
  _postsService = inject(PostsService);
  _router = inject(Router);

  formPost: FormGroup;
  allPosts: Post[];
  postNuevo: Post | undefined;

  constructor() {
    this.allPosts = [];

    this.formPost = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      content: new FormControl(null, [
        Validators.required,
        Validators.minLength(30),
      ]),
      abstract: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
      img: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts = () => (this.allPosts = this._postsService.getAll());

  saveOnSubmit = () => {
    this.postNuevo = this.formPost.value;
    this.postNuevo!.id = this.allPosts.length + 1;
    this.allPosts.push(this.postNuevo!);
    this._postsService.saveAll(this.allPosts);
    this._router.navigate(['posts']);
  };
}
