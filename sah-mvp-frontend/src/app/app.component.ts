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
  data$: any;

  constructor(private repository: PropertyRepository) {

  }

  ngOnInit() {
    this.get();
  }

  get(page: number = 1, sortBy: string = "id", direction: string = "asc") {
    this.data$ = this.repository.getProperties(page, sortBy, direction).pipe(
      tap((response) => {
        this.page = page;
        console.log('response is', response);
      })
    );
  }

  sort({ active, direction }) {
    if (!active || direction === '') {
      this.get();
    } else  {
      this.get(this.page, active, direction);
    }
  }
}
