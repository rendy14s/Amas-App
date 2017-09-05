import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecoveryManagementPage } from './recovery-management';

@NgModule({
  declarations: [
    RecoveryManagementPage,
  ],
  imports: [
    IonicPageModule.forChild(RecoveryManagementPage),
  ],
  exports: [
    RecoveryManagementPage
  ]
})
export class RecoveryManagementPageModule {}
