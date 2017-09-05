import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerformanceProfilingPage } from './performance-profiling';

@NgModule({
  declarations: [
    PerformanceProfilingPage,
  ],
  imports: [
    IonicPageModule.forChild(PerformanceProfilingPage),
  ],
  exports: [
    PerformanceProfilingPage
  ]
})
export class PerformanceProfilingPageModule {}
