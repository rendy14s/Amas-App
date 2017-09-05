import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MealPlanPage } from './meal-plan';

@NgModule({
  declarations: [
    MealPlanPage,
  ],
  imports: [
    IonicPageModule.forChild(MealPlanPage),
  ],
  exports: [
    MealPlanPage
  ]
})
export class MealPlanPageModule {}
