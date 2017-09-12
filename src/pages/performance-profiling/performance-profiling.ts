import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PerformanceProfilingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-performance-profiling',
  templateUrl: 'performance-profiling.html',
})
export class PerformanceProfilingPage {

  public photo: any = 'assets/images/no-pp.png';
  public datasStorage: any;
  public username: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage
  ) {
    
  }

  ionViewDidLoad() {
    this.storage.ready().then(() => {
      this.storage.get('amasAuth').then((amasAuth) => {
        this.datasStorage = amasAuth;
        this.username = this.datasStorage.fullname;
      });
    });
  }

}
