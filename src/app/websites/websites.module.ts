import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WidgetsComponent } from './widgets/widgets.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,NgbModule.forRoot()
  ],
  declarations: [HomeComponent, AboutComponent, WidgetsComponent]
})
export class WebsitesModule { }
