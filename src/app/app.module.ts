import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SlickGridModule } from './slick-grid/slick-grid.module';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  imports:      [ BrowserModule, FormsModule,MatTabsModule, SlickGridModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
