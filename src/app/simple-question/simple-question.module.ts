import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../shared/material/material.module';

import { SimpleQuestionRoutingModule } from './simple-question-routing.module';

import { SimpleQuestionTableComponent } from './components/simple-question-table/simple-question-table.component';
import { SimpleQuestionComponent } from './containers/simple-question/simple-question.component';


@NgModule({
  declarations: [SimpleQuestionComponent, SimpleQuestionTableComponent],
  imports: [
    CommonModule,
    SimpleQuestionRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class SimpleQuestionModule { }
