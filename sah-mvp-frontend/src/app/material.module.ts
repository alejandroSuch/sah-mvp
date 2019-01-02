import {NgModule} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ScrollingModule} from '@angular/cdk/scrolling';



/**
 * NgModule that includes all Material modules.
*/
@NgModule({
  exports: [
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatPaginatorModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ScrollingModule
  ]
})
export class MaterialModule {}
