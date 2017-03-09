import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook } from 'ionic-native';
import { GooglePlus } from 'ionic-native';
import {TwitterConnect} from 'ionic-native';
import { Instagram } from "ng2-cordova-oauth/core";  
import { OauthCordova } from 'ng2-cordova-oauth/platform/cordova';
import { UserService } from '../../providers/user-service';
import { Auth, User } from '@ionic/cloud-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController,public auth: Auth, public user: User) {
    
  }

facebookLogin(){
    Facebook.login(['email']).then( (response) => {
        
             alert("data "+JSON.stringify(response));
    }).catch((error) => { console.log(error) });


}

facebookLogout(){
    Facebook.login(['email']).then( (response) => {
        
             alert("data "+JSON.stringify(response));
    }).catch((error) => { console.log(error) });
}

googleLogin(){

  GooglePlus.login({
      'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': '1003432503727-ah8n11ff3bglcfkpje85a91dgm817j16.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true
    })
  .then((res )=> {

   alert("data "+JSON.stringify(res));
    console.log(JSON.stringify(res))})
  .catch((err) => {
 alert("data....error "+JSON.stringify(err));
    console.error(err)});

}

googleLogout(){

GooglePlus.logout().then( (response) => {
        
      alert("data "+JSON.stringify(response));

    }).catch((error) => { 

      console.log(error) });
}

twitterLogin(){

   TwitterConnect.login().then((response) => {
        
      alert("data "+JSON.stringify(response));

    }).catch((error) => { 
 alert("data....error "+error);
      console.log(error) 
    });
  }

  twitterLogout(){

    TwitterConnect.logout();
  }

 instagramLogout(){

this.auth.logout();
  }

  instagramLogin(){
alert("hello");
    this.auth.login('instagram').then((resp)=>{
console.log("Successfully logged into instagram"+JSON.stringify(resp));
alert('Successfully logged into instagram'+JSON.stringify(resp));
// You can then maybe re-direct to the home page, or whatever page
//this.navCtrl.setRoot(HomePage);
}).catch((error)=>{

  alert('error '+error);

});
  }


}
