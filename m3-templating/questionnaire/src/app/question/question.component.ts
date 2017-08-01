import {Component, Input, ViewEncapsulation} from '@angular/core';
import {QuestionType} from '../question-type.enum';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class QuestionComponent {
  @Input() id;
  @Input() question;
  @Input() questionType: QuestionType;

  public questionTypeEnum = QuestionType;

  onAnswered(answerResult) {
    console.log(answerResult);
  }
}
