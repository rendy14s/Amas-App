import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  public performanceProfiling(){
    this.navCtrl.push('PerformanceProfilingPage');
  }

  public wellness(){
    this.navCtrl.push('WellnessPage');
  }

  public trainingLoad(){
    this.navCtrl.push('TrainingLoadPage');
  }

  public pmc(){
    this.navCtrl.push('PmcPage');
  }

  public mealPlan(){
    this.navCtrl.push('MealPlanPage');
  }

  public medical(){
    this.navCtrl.push('RecoveryManagementPage');
  }

}
