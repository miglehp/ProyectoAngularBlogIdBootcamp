import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPostsComponent } from './components/lista-posts/lista-posts.component';
import { FormPostsComponent } from './components/form-posts/form-posts.component';
import { DetallePostComponent } from './components/detalle-post/detalle-post.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'posts'},
  {path: 'new', component: FormPostsComponent},
  {path: 'posts', component: ListaPostsComponent},
  {path: 'posts/:postId', component: DetallePostComponent},
  {path: '**', redirectTo: 'posts'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
