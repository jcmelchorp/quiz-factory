import { Injectable } from '@angular/core';

import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { map, mergeMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Questionary } from '../models/questionary.model';
import { QuestionaryService } from '../../questionary/services/questionary.service';

import * as QuestionaryActions from './questionary.actions';

@Injectable()
export class QuestionaryEffects {
  constructor(private action$: Actions, private gService: QuestionaryService) { }

  GetQuestionarys$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(QuestionaryActions.BeginGetQuestionariesAction),
      mergeMap(() =>
        this.gService.getUserQuestionaries().pipe(
          map((data: Questionary[]) => {
            // data = []; // little hack to test an empty response from the API
            return QuestionaryActions.SuccessGetQuestionariesAction({ payload: data });
          }),
          catchError((error: Error) => {
            return of(QuestionaryActions.ErrorQuestionaryAction(error));
          })
        )
      )
    )
  );
}
