import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { WebsitesModule } from './websites/websites.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    WebsitesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
