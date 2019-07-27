import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalConstants } from '../../utils/global-constants';
import { ZoneData } from '../../models/common';

/**
 * Generated class for the FirstMileResoltutionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first-mile-resoltution',
  templateUrl: 'first-mile-resoltution.html',
})
export class FirstMileResoltutionPage {
  
  rideStartZone: ZoneData;
  rideEndZone: ZoneData;
  transitMode: string;
  lat: string = GlobalConstants.CURRENT_LOC_LAT;
  lng: string = GlobalConstants.CURRENT_LOC_LNG;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rideStartZone = this.navParams.get('sourceZone');
    this.rideEndZone = this.navParams.get('destZone');
    this.transitMode = this.navParams.get('mode');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstMileResoltutionPage');
  }

}
