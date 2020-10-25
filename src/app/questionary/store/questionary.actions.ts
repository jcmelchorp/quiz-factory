import { createAction, props } from '@ngrx/store';

import { Questionary } from '../models/questionary.model';

export const GetQuestionariesAction = createAction('[Questionary] - Get Questionaries');

export const BeginGetQuestionariesAction = createAction('[Questionary] - Begin Get Questionaries');

export const SuccessGetQuestionariesAction = createAction(
  '[Questionary] - Success Get Questionaries',
  props<{ payload: Questionary[] }>()
);

export const ErrorQuestionaryAction = createAction('[Questionary] - Error', props<Error>());
