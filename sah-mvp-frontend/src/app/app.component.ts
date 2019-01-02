import { Component, OnInit } from '@angular/core';

import { PropertiesDs } from './properties.ds';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { distinctUntilChanged, map, take, tap } from 'rxjs/operators';
import { Filter } from './model';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { FilterWrapperComponent } from './filter-wrapper/filter-wrapper.component';

const SMALL_RESOLUTIONS = ['xs', 'sm'];
const DRAWER_MODE_OVER = 'over';
const DRAWER_MODE_SIDE = 'side';

@Component({
  selector: 'sah-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  filterOpened: boolean = false;

  filter: Filter = {
    sortBy: 'id',
    direction: 'asc',
  };

  isHandset$ = this.mediaObserver.media$.pipe(
    map((change: MediaChange) => change.mqAlias),
    distinctUntilChanged(),
    map((change: string) => SMALL_RESOLUTIONS.includes(change)),
    tap((isHandset: boolean) => {
      this.filterOpened = !isHandset;
    }),
  );

  mode$ = this.isHandset$.pipe(
    map((isHandset: boolean) => isHandset ? DRAWER_MODE_OVER : DRAWER_MODE_SIDE),
  );

  constructor(private ds: PropertiesDs, private mediaObserver: MediaObserver, private bottomSheet: MatBottomSheet) {
  }

  ngOnInit() {
  }

  toggleFilter() {
    const ref: MatBottomSheetRef<FilterWrapperComponent> = this.bottomSheet.open(FilterWrapperComponent, { data: { filter: this.filter } });

    ref.instance.filterChanged
      .pipe(take(1))
      .subscribe(
        (filter: Filter) => {
          this.bottomSheet.dismiss();
          this.handleFilterChanged(filter);
        },
      );
  }

  handleFilterChanged(filter: Filter) {
    this.filter = { ...filter };
  }
}

