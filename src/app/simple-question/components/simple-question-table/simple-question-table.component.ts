import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

import { Question } from 'src/app/quiz/models/quiz-model';

import { SimpleQuestionTableDataSource, SimpleQuestionTableItem } from './simple-question-table-datasource';

@Component({
  selector: 'app-simple-question-table',
  templateUrl: './simple-question-table.component.html',
  styleUrls: ['./simple-question-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleQuestionTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<SimpleQuestionTableItem>;
  dataSource: SimpleQuestionTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new SimpleQuestionTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
