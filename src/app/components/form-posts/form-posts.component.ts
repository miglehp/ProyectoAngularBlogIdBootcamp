import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-form-posts',
  templateUrl: './form-posts.component.html',
  styleUrls: ['./form-posts.component.scss']
})
export class FormPostsComponent {

  _postsService = inject(PostsService);

  formPost: FormGroup;
  postNuevo: Post | undefined;

  constructor(){
    this.formPost = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      content: new FormControl(null, [Validators.required, Validators.minLength(30)]),
      abstract: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      img: new FormControl(null, [Validators.required])
    })
  }

}
