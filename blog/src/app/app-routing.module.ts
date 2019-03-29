import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BlogComponent} from './blog/blog.component';
import {QuizComponent} from './quiz/quiz.component';
import {KontaktComponent} from './kontakt/kontakt.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: KontaktComponent,
  },
  {
    path: 'blog',
component: BlogComponent,
},
{
  path: 'quiz',
    component: QuizComponent,

}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
