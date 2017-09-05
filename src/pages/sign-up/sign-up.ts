import { AmasusercredentialApi } from './../../shared/sdk/services/custom/Amasusercredential';
import { AmasmasterlicenceApi } from './../../shared/sdk/services/custom/Amasmasterlicence';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { md5 } from './../../assets/private/HashSalt';
import * as moment from 'moment';
/**
 * Generated class for the SignUpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  public fullName: any;
  public birthDate: any;
  public province: any;
  public gender: any;
  public licence: any;
  public username: any;
  public password: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public AmasUserCredential: AmasusercredentialApi,
    public AmasMasterLicence: AmasmasterlicenceApi,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad() {

  }

  public signup() {
    let loader = this.loadingCtrl.create({
      content: "Please wait... Validate Licence Code",
    });
    loader.present();
    this.AmasMasterLicence.findById(this.licence)
      .subscribe((findLicence) => {
        loader.dismiss();
        this.createData();
      }, (error) => {
        loader.dismiss();
        let alert = this.alertCtrl.create({
          subTitle: 'Ups.. Your Licence Code is does not match with other our licence!',
          buttons: ['OK']
        });
        alert.present();
      });
  }

  public createData() {
    let loaderCreate = this.loadingCtrl.create({
      content: "Please wait... Create Account",
    });
    loaderCreate.present();
    const accountCreatedDate = moment().format('YYYY-MM-DD');
    let saltHash = md5(this.password);

    this.AmasUserCredential.create({
      fullname: this.fullName,
      birthday: this.birthDate,
      province: this.province,
      gender: this.gender,
      licencecode: this.licence,
      username: this.username,
      password: saltHash,
      createddate: accountCreatedDate
    }).subscribe((createData) => {

      this.fullName = '';
      this.birthDate = '';
      this.province = '';
      this.gender = '';
      this.licence = '';
      this.username = '';
      this.password = '';
      loaderCreate.dismiss();

      let alert = this.alertCtrl.create({
        message: 'Success Registry!',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.navCtrl.setRoot('LoginPage');
            }
          }
        ]
      });
      alert.present();
    }, (error) => {
      loaderCreate.dismiss();
      let alert = this.alertCtrl.create({
        subTitle: 'Ups.. Our server is under maintenance! Try again later.',
        buttons: ['OK']
      });
      alert.present();
    });
  }

  public cancel() {
    this.navCtrl.setRoot('LoginPage');
  }

}
