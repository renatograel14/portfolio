import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app.routing';
import { PageGuard } from './theme/guards';
import { NgaModule } from "app/theme";

@NgModule({
  declarations: [
    AppComponent,
    ...routedComponents,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgaModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [PageGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
