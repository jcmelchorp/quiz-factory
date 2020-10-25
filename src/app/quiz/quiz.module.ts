import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from './../shared/material/material.module';
import { DeleteButtonComponent } from '../shared/components/delete-button/delete-button.component';

import { QuizRoutingModule } from './quiz-routing.module';

import { QuestionDialogComponent } from './components/question-dialog/question-dialog.component';
import { QuizDialogComponent } from './components/quiz-dialog/quiz-dialog.component';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';
import { QuizComponent } from './components/quiz/quiz.component';


@NgModule({
  declarations: [QuizListComponent, QuizComponent, QuizDialogComponent, QuestionDialogComponent],
  imports: [
    CommonModule,
    QuizRoutingModule,
    FormsModule,
    SharedModule,
    MaterialModule,
  ],
  entryComponents: [QuizDialogComponent, QuestionDialogComponent]
})
export class QuizModule { }
