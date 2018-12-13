import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent} from '../websites/home/home.component';
import { AboutComponent} from '../websites/about/about.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
  path: '',
  component: HomeComponent,
  data: { title: 'home' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'about' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'home' }
  },
  { path: '**', component: HomeComponent }
 
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  
  
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
