import { AmasusercredentialApi } from './../../shared/sdk/services/custom/Amasusercredential';
import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { md5 } from './../../assets/private/HashSalt';
import * as moment from 'moment';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',

  animations: [

    //For the logo
    trigger('flyInBottomSlow', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({ transform: 'translate3d(0,2000px,0' }),
        animate('2000ms ease-in-out')
      ])
    ]),

    //For the background detail
    trigger('flyInBottomFast', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({ transform: 'translate3d(0,2000px,0)' }),
        animate('1000ms ease-in-out')
      ])
    ]),

    //For the login form
    trigger('bounceInBottom', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        animate('2000ms 200ms ease-in', keyframes([
          style({ transform: 'translate3d(0,2000px,0)', offset: 0 }),
          style({ transform: 'translate3d(0,-20px,0)', offset: 0.9 }),
          style({ transform: 'translate3d(0,0,0)', offset: 1 })
        ]))
      ])
    ]),

    //For login button
    trigger('fadeIn', [
      state('in', style({
        opacity: 1
      })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1000ms 2000ms ease-in')
      ])
    ])
  ]

})
export class LoginPage {

  public username: any;
  public password: any;

  public dataLogin: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public AmasUserCredential: AmasusercredentialApi,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {

  }

  public createAccount() {
    this.navCtrl.setRoot('SignUpPage');
  }

  public login() {
    let loader = this.loadingCtrl.create({
      content: "Please wait... Login in",
    });
    loader.present();

    let saltHash = md5(this.password);

    this.AmasUserCredential.findOne({
      where: {
        and: [
          { username: this.username },
          { password: saltHash }
        ]
      }
    }).subscribe((loginFind) => {
      this.dataLogin = loginFind;

      loader.dismiss();
      this.updateLoginDate();

    }, (error) => {
      loader.dismiss();
      let alert = this.alertCtrl.create({
        subTitle: 'Ups.. Your username or password wrong! Try again.',
        buttons: ['OK']
      });
      alert.present();
    });
  }

  public updateLoginDate() {
    let loaderUpdate = this.loadingCtrl.create({
      content: "Please wait... Sync data user",
    });
    loaderUpdate.present();

    const accountCreatedDate = moment().format('YYYY-MM-DD');

    this.AmasUserCredential.updateAll(
      { id: this.dataLogin.id },
      { lastlogindate: accountCreatedDate }
    ).subscribe((updateDateLogin) => {
      loaderUpdate.dismiss();
      this.navCtrl.setRoot('MenuPage');
    }, (error) => {
      loaderUpdate.dismiss();
      let alert = this.alertCtrl.create({
        subTitle: 'Ups.. Our server is under maintenance! Try again',
        buttons: ['OK']
      });
      alert.present();
    });
  }

}
