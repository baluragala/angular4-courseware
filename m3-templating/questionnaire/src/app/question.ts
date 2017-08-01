import {QuestionType} from './question-type.enum';
import {Option} from './option';

export class Question {

  private _qid: string;
  private _question: string;
  private _questionType: QuestionType;
  private _options: Array<Option>;

  get qid(): string {
    return this._qid;
  }

  set qid(value: string) {
    this._qid = value;
  }

  get question(): string {
    return this._question;
  }

  set question(value: string) {
    this._question = value;
  }

  get questionType(): QuestionType {
    return this._questionType;
  }

  set questionType(value: QuestionType) {
    this._questionType = value;
  }

}
