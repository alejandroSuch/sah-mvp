import { catchError, take, tap } from 'rxjs/operators';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, EMPTY, Observable, Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import { PropertyRepository } from './property-repository.service';
import { Filter } from './model';

@Injectable({ providedIn: 'root' })
export class PropertiesDs extends DataSource<any> {
  private length = 100000;
  private currentPage = 0;
  private pageSize = 25;
  private cachedData = Array.from<any>({ length: this.length });
  private fetchedPages = new Set<number>();
  private dataStream = new BehaviorSubject<(any)[]>(this.cachedData);
  private subscription = new Subscription();
  private sortBy: string;
  private direction: string;

  constructor(private repository: PropertyRepository) {
    super();
    this.filter = { sortBy: 'id', direction: 'asc' };
  }

  connect(collectionViewer: CollectionViewer): Observable<(any)[]> {
    this.subscription.add(collectionViewer.viewChange.subscribe(range => {
      const startPage = this.getPageForIndex(range.start);
      const endPage = this.getPageForIndex(range.end - 1);

      for (let i = startPage; i <= endPage; i++) {
        this.fetchPage(i);
      }
    }));

    return this.dataStream;
  }

  disconnect(): void {
    this.subscription.unsubscribe();
  }

  set page(number: number) {
    this.currentPage = number;
    this.fetchPage(this.currentPage);
  }

  set filter(filter: Filter) {

    if (!filter) {
      this.sortBy = 'id';
      this.direction = 'asc';
    } else {
      const { sortBy, direction } = filter;

      if (sortBy !== this.sortBy || direction !== this.direction) {
        this.sortBy = sortBy;
        this.direction = direction;

        // RESET DATA
        this.cachedData = Array.from({ length: this.length });
        this.dataStream.next(this.cachedData);
        this.fetchedPages.clear();

        // GET CURRENT PAGE
        this.fetchPage(this.currentPage);
      }
    }
  }

  private getPageForIndex(index: number): number {
    return Math.floor(index / this.pageSize);
  }

  private fetchPage(page: number) {
    this.currentPage = page;

    if (this.fetchedPages.has(page)) {
      return;
    }

    console.log('fetching page', page);

    this.fetchedPages.add(page);

    this.repository
      .getProperties(page, this.sortBy, this.direction)
      .pipe(
        take(1),
        tap((data) => {
          if (this.length !== data['numberOfElements']) {
            this.length = data['numberOfElements'];
            this.cachedData = Array.from({ length: this.length }).map((_, i) => this.cachedData[i]);
          }

          this.cachedData.splice(
            page * this.pageSize,
            this.pageSize,
            ...Array.from({ length: data['elements'].length }).map((_, i) => data['elements'][i]),
          );

          this.dataStream.next(this.cachedData);
        }),
        catchError(() => {
          this.fetchedPages.delete(page);
          return EMPTY;
        }),
      )
      .subscribe();
  }
}
