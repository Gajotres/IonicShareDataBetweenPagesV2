import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesHomePage } from './pages-home';

@NgModule({
  declarations: [
    PagesHomePage,
  ],
  imports: [
    IonicPageModule.forChild(PagesHomePage),
  ],
})
export class PagesHomePageModule {}
