export class Quiz {
  id?: string;
  title?: string;
  description?: string;
  priority?: number;
  public areaTag?: string[];
  public questions?: Question[];
}

export class Question {
  question?: string;
  correctIndex?: number;
  label?: 'purple' | 'blue' | 'green' | 'yellow' | 'red' | 'gray';
  public answers?: Array<any>;
}
