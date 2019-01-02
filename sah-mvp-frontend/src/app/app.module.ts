import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { environment } from './../environments/environment';
import { PROPERTIES_URL } from './injection-tokens';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FilterComponent } from './filter/filter.component';
import { ListComponent } from './list/list.component';
import { FilterWrapperComponent } from './filter-wrapper/filter-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FilterComponent,
    ListComponent,
    FilterWrapperComponent,
  ],
  entryComponents: [
    FilterWrapperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [
    { provide: PROPERTIES_URL, useValue: environment.propertiesUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
