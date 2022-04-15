import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularSlickgridModule } from 'angular-slickgrid';
@NgModule({
  imports:  [
    BrowserModule,
    FormsModule,
    AngularSlickgridModule.forRoot({
      // add any Global Grid Options/Config you might want
      // to avoid passing the same options over and over in each grids of your App
     // enableAutoResize: true,
      // autoResize: {
      //   container: '#grid-container',
      //   rightPadding: 10
      // }
    })
  ],  
  exports:[ ]  
})
export class SlickGridModule { }