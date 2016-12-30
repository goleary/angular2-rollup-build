import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClipboardModule } from 'ngx-clipboard';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, ClipboardModule],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
})
export class AppModule { }

