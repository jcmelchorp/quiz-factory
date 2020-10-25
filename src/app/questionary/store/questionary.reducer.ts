import { Action, createReducer, on, createFeatureSelector, createSelector, State } from '@ngrx/store';

import * as QuestionaryActions from './questionary.actions';
import QuestionaryState, { initializeState } from './questionary.state';

export const intialState = initializeState();

const reducer = createReducer(
  intialState,
  on(QuestionaryActions.GetQuestionariesAction, state => state),
  on(QuestionaryActions.SuccessGetQuestionariesAction, (state: QuestionaryState, { payload }) => {
    return { ...state, questionaries: payload, isLoaded: true };
  }),
  on(QuestionaryActions.ErrorQuestionaryAction, (state: QuestionaryState, error: Error) => {
    console.log(error);
    return { ...state, QuestionaryError: error };
  })
);

export function questionaryReducer(state: QuestionaryState, action: Action) {
  return reducer(state, action);
}
