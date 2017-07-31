import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class QuestionComponent {
  question = 'Are you happy with the service provided?';
}
