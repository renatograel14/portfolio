import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app.routing';
import { PageGuard } from './theme/guards';
import { GlobalService } from './theme/services';

@NgModule({
  declarations: [
    AppComponent,
    ...routedComponents
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [GlobalService, PageGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
