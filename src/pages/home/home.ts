import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Router } from '@angular/router'; 
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private router: Router) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  actionsheet() {
    this.router.navigateByUrl('/actionsheet');
  }
}
