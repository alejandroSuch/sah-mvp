import {NgModule} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort';


/**
 * NgModule that includes all Material modules.
*/
@NgModule({
  exports: [
    MatTableModule,
    MatSortModule,
    MatCardModule
  ]
})
export class MaterialModule {}
