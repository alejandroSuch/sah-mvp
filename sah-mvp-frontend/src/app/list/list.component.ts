import { Component, Input, OnChanges, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { PropertiesDs } from '../properties.ds';
import { Filter } from '../model';
import { CdkScrollable } from '@angular/cdk/overlay';

@Component({
  selector: 'sah-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnChanges {

  @Input()
  ds: PropertiesDs;

  @Input()
  filter: Filter;

  @ViewChild(CdkScrollable)
  scrollable: CdkScrollable;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.handleFilterChange(changes['filter']);
  }

  private handleFilterChange(change: SimpleChange) {
    if (!change.isFirstChange() && this.ds) {
      this.ds.page = 0;
      this.scrollable.scrollTo({ top: 0 });

      this.ds.filter = change.currentValue;
    }
  }
}
