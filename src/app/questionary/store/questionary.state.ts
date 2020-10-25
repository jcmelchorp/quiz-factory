import { Questionary } from '../models/questionary.model';

export default class QuestionaryState {
  questionaries: Questionary[];
  questionaryError: Error;
  isLoaded: false;
}

export const initializeState = () => {
  return { questionaries: Array<Questionary>() };
};
