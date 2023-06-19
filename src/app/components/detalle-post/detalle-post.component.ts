import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-detalle-post',
  templateUrl: './detalle-post.component.html',
  styleUrls: ['./detalle-post.component.scss']
})
export class DetallePostComponent {

  activatedRoute = inject(ActivatedRoute);
  _postsService = inject(PostsService);

  post: Post | undefined;

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      this.post = this._postsService.getById(Number(params['postId']));
    })
  }

}
