import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BlogHomeComponent} from './components/blog-home/blog-home.component';
import {QuizComponent} from './quiz/quiz.component';
import {KontaktComponent} from './kontakt/kontakt.component';
import {BlogItemDetailsComponent} from './components/blog-item-details/blog-item-details.component';
import {AddPostComponent} from './components/add-post/add-post.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: KontaktComponent,
  },
  {
    path: 'blog',
component: BlogHomeComponent,
},
{
  path: 'quiz',
    component: QuizComponent,

},
  {
    path: 'blog/detail/:id',
    component: BlogItemDetailsComponent,
  },
  {
    path: 'add-post',
    component: AddPostComponent,
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
