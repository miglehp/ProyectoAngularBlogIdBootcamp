import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPostsComponent } from './components/lista-posts/lista-posts.component';
import { FormPostsComponent } from './components/form-posts/form-posts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetallePostComponent } from './components/detalle-post/detalle-post.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPostsComponent,
    FormPostsComponent,
    NavbarComponent,
    FooterComponent,
    DetallePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
