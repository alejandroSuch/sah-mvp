import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Filter } from '../model';

const DIR_ASC = 'asc';
const DIR_DESC = 'desc';
const ARROW_DOWN = 'arrow_downward';
const ARROW_UP = 'arrow_upward';

@Component({
  selector: 'sah-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input()
  filter: Filter;

  @Output()
  filterChanged: EventEmitter<Filter> = new EventEmitter();

  constructor() {
  }

  sortBy(element) {
    const { sortBy, direction } = this.filter;

    const filter: Filter = {
      sortBy: element,
      direction: sortBy === element ? (direction === DIR_ASC ? DIR_DESC : DIR_ASC) : DIR_ASC,
    };

    this.filterChanged.emit(filter);
  }

  iconFor(element) {
    if (this.filter.sortBy !== element) {
      return '';
    }

    return this.filter.direction === DIR_ASC ? ARROW_UP : ARROW_DOWN;
  }

}
