import { Component, OnInit, OnDestroy } from '@angular/core';

import { PropertyRepository } from './property-repository.service';

import {tap} from 'rxjs/operators';

@Component({
  selector: 'sah-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  loading: boolean = false;

  page:number = 1;
  total: number = 0;
  sortBy: string = "id";
  direction: string = "asc";
  data$: any;

  constructor(private repository: PropertyRepository) {}

  ngOnInit() {
    this.get();
  }

  pageChanged({pageIndex}) {
    this.page = pageIndex;
    this.get();
  }

  get() {
    this.data$ = this.repository.getProperties(this.page, this.sortBy, this.direction).pipe(
      tap((response) => {
        this.total = response['numberOfElements'];
      })
    );
  }

  sort({ active, direction }) {
    if (!active || direction === '') {
      this.sortBy = 'id';
      this.direction = 'asc';
    } else {
      this.sortBy = active;
      this.direction = direction;
    }

    this.get();
  }
}
