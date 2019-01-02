import {Component, OnInit} from '@angular/core';

import {PropertiesDs} from "./properties.ds";
import {MediaChange, MediaObserver} from "@angular/flex-layout";
import {distinctUntilChanged, map, tap} from "rxjs/operators";


const SMALL_RESOLUTIONS = ['xs', 'sm'];

@Component({
  selector: 'sah-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isHandset$ = this.mediaObserver.media$.pipe(
    map((change: MediaChange) => change.mqAlias),
    distinctUntilChanged(),
    map((change: string) => SMALL_RESOLUTIONS.includes(change))
  );

  constructor(private ds: PropertiesDs, private mediaObserver: MediaObserver) {
  }

  ngOnInit() {
  }
}

