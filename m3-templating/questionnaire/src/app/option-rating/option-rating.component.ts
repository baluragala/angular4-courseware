import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuestionType} from '../question-type.enum';

@Component({
  selector: 'app-option-rating',
  templateUrl: './option-rating.component.html',
  styleUrls: ['./option-rating.component.css']
})
export class OptionRatingComponent implements OnInit {

  public questionTypeEnum = QuestionType;
  @Input() id;
  @Output() onAnswered: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onChange(e) {
    this.onAnswered.emit({id: this.id, answer: e.target.value});
  }

}
