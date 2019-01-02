import {Component, OnInit} from '@angular/core';

import {PropertiesDs} from "./properties.ds";
import {MediaChange, MediaObserver} from "@angular/flex-layout";
import {distinctUntilChanged, map, tap} from "rxjs/operators";


const SMALL_RESOLUTIONS = ['xs', 'sm'];
const DRAWER_MODE_OVER = 'over';
const DRAWER_MODE_SIDE = 'side';

@Component({
  selector: 'sah-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  filterOpened: boolean = true;

  isHandset$ = this.mediaObserver.media$.pipe(
    map((change: MediaChange) => change.mqAlias),
    distinctUntilChanged(),
    map((change: string) => SMALL_RESOLUTIONS.includes(change)),
    tap((isHandset: boolean) => {
      this.filterOpened = !isHandset;
    })
  );

  mode$ = this.isHandset$.pipe(
    map((isHandset: boolean) => isHandset ? DRAWER_MODE_OVER : DRAWER_MODE_SIDE)
  );

  constructor(private ds: PropertiesDs, private mediaObserver: MediaObserver) {
  }

  ngOnInit() {
  }

  toggleFilter() {
    this.filterOpened = !this.filterOpened;
  }
}

