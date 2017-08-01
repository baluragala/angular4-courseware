import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuestionType} from '../question-type.enum';

@Component({
  selector: 'app-option-boolean',
  templateUrl: './option-boolean.component.html',
  styleUrls: ['./option-boolean.component.css']
})
export class OptionBooleanComponent implements OnInit {
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
