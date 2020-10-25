import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Question } from '../../models/quiz-model';
import { QuizService } from '../../services/quiz.service';
import { QuestionDialogComponent } from '../question-dialog/question-dialog.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  @Input() quiz;

  questionDrop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.quiz.questions, event.previousIndex, event.currentIndex);
    this.quizService.updateQuestions(this.quiz.id, this.quiz.questions);
  }

  openDialog(question?: Question, idx?: number): void {
    const newQuestion = { label: 'purple' };
    const dialogRef = this.dialog.open(QuestionDialogComponent, {
      width: '500px',
      data: question
        ? { question: { ...question }, isNew: false, quizId: this.quiz.id, idx }
        : { question: newQuestion, isNew: true }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.isNew) {
          this.quizService.updateQuestions(this.quiz.id, [
            ...this.quiz.questions,
            result.question
          ]);
        } else {
          const update = this.quiz.questions;
          update.splice(result.idx, 1, result.question);
          this.quizService.updateQuestions(this.quiz.id, this.quiz.questions);
        }
      }
    });
  }

  handleDelete() {
    this.quizService.deleteQuiz(this.quiz.id);
  }

  constructor(private quizService: QuizService, private dialog: MatDialog) { }
}
