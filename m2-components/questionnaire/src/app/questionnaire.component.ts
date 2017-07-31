import {Component} from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  template: `
    <div class="container"><h1>{{title}}</h1>
      <app-question></app-question>
    </div>`,
  styles: [
      `h1 {
      color: cyan
    }`,
      `.container {
      width: 80%;
      margin: 0 auto;
    }`]
})

export class QuestionnaireComponent {
  title = 'Customer Satisfaction';
}
