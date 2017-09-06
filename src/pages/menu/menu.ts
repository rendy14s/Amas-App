import { HomePage } from './../home/home';
import { Storage } from '@ionic/storage';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav, NavParams, Platform, Events, AlertController } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  @ViewChild(Nav) nav: Nav;

  public photo: any = 'assets/images/no-pp.png';
  public rootPage: any = HomePage;
  public pages: Array<{ title: string, component: any, icons: any, show: boolean }>;
  public dashboard: Array<{ title: string, component: any, icons: any, show: boolean }>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public platform: Platform,
    public events: Events,
    public alertCtrl: AlertController
  ) {
    this.loadMenu();
    this.loadDashboard();
  }

  public loadMenu() {
    this.pages = [
      { title: 'Home', component: HomePage, icons: 'home', show: true },
      { title: 'Group', component: 'GroupPage', icons: 'md-people', show: true }
    ];
  }

  public loadDashboard() {
    this.dashboard = [
      { title: 'Performance Profiling', component: 'PerformanceProfilingPage', icons: 'md-pie', show: true },
      { title: 'Wellness', component: 'WellnessPage', icons: 'md-flask', show: true },
      { title: 'Training Load', component: 'TrainingLoadPage', icons: 'md-basketball', show: true },
      { title: 'PMC', component: 'PmcPage', icons: 'md-desktop', show: true },
      { title: 'Meal Plan', component: 'MealPlanPage', icons: 'md-restaurant', show: true },
      { title: 'Recovery Management', component: 'RecoveryManagementPage', icons: 'md-medkit', show: true }
    ];
  }

  public openPage(page) {
    this.nav.setRoot(page.component);
  }

  public dashboards(d) {
    this.nav.setRoot(d.component);
  }

  public gotoLogout() {
    let alert = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Do you want logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.storage.clear();
            window.localStorage.clear();
            this.navCtrl.setRoot('LoginPage');
          }
        }
      ]
    });
    alert.present();
  }

}
