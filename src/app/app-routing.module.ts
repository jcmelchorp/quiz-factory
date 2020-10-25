import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShellComponent } from './shared/shell/shell.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '', component: ShellComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'login', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
      { path: 'simple-question', loadChildren: () => import('./simple-question/simple-question.module').then(m => m.SimpleQuestionModule) },
      { path: 'quizes', loadChildren: () => import('./quiz/quiz.module').then(m => m.QuizModule) },
      { path: 'questionaries', loadChildren: () => import('./questionary/questionary.module').then(m => m.QuestionaryModule) }
    ],
  }];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
