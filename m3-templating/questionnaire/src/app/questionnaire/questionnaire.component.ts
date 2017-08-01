import {Component} from '@angular/core';
import {QuestionType} from '../question-type.enum';
import {Question} from '../question';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})

export class QuestionnaireComponent {
  title = 'Customer Satisfaction';
  questions = [
    {
      qid: 'q1',
      question: 'Are you happy with service provided?',
      questionType: QuestionType.Boolean
    },
    {
      qid: 'q2',
      question: 'How do you like to rate our service on scale of 1-5?',
      questionType: QuestionType.Rating
    },
    {
      qid: 'q3',
      question: 'Are your questions answered in entirety?',
      questionType: QuestionType.Boolean
    }
  ]
}
