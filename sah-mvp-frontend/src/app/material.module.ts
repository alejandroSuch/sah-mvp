import {NgModule} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';



/**
 * NgModule that includes all Material modules.
*/
@NgModule({
  exports: [
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatPaginatorModule
  ]
})
export class MaterialModule {}
