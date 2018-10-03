import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { AppComponent} from '../app.component'
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
//   {
//   path: '',
//   component: AppComponent,
//   data: { title: 'Heroes List' }
// }
 
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
