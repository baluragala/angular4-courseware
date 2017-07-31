import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {QuestionnaireComponent} from './questionnaire.component';
import {QuestionComponent} from './question/question.component';
import { OptionBooleanComponent } from './option-boolean/option-boolean.component';
import { OptionRatingComponent } from './option-rating/option-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    QuestionComponent,
    OptionBooleanComponent,
    OptionRatingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
