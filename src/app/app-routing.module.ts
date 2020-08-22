import { PostsModule } from './posts/posts.module';
import { HomeComponent } from './home/home.component';
// import { PostComponent } from './posts/post/post.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
// import {} from '../PostComponent';
import {} from './posts/post/post.component';


const routes: Routes =
[
  {path:'', component:HomeComponent},
{path:'home', component:HomeComponent},
{path:"about", component:AboutComponent},
{path:'posts',loadChildren:"../app/posts/posts.module#PostsModule"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
