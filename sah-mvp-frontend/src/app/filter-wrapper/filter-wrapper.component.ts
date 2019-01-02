import { Component, EventEmitter, Inject } from '@angular/core';
import { Filter } from '../model';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material';

@Component({
  selector: 'sah-filter-wrapper',
  templateUrl: './filter-wrapper.component.html',
  styleUrls: ['./filter-wrapper.component.scss'],
})
export class FilterWrapperComponent {
  filterChanged: EventEmitter<Filter> = new EventEmitter();

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
  }

  handleFilterChanged(filter: Filter) {
    this.data.filter = filter;
    this.filterChanged.emit(filter);
  }
}
