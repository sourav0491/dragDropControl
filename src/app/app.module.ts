import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer'; // <- import PdfViewerModule

import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    PdfViewerModule,
    BrowserAnimationsModule,
    DragDropModule // <- Add PdfViewerModule to imports
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
