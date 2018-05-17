import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public newsFeed;

  constructor(public navCtrl: NavController, private http: HttpClient) {
    this.newsFeed = this.http.get('https://briephlydev.herokuapp.com/api/newsfeeds')
  }

}
