import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainingLoadPage } from './training-load';

@NgModule({
  declarations: [
    TrainingLoadPage,
  ],
  imports: [
    IonicPageModule.forChild(TrainingLoadPage),
  ],
  exports: [
    TrainingLoadPage
  ]
})
export class TrainingLoadPageModule {}
