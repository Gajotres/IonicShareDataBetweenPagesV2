import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesSecondPage } from './pages-second';

@NgModule({
  declarations: [
    PagesSecondPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesSecondPage),
  ],
})
export class PagesSecondPageModule {}
