import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'eardrvm';

  ngOnInit() {
    const config = {
    apiKey: "AIzaSyD2gboW54XIa7S-LkNmBxyyYhGMa7Sf2R4",
    authDomain: "eardrvm-438d2.firebaseapp.com",
    databaseURL: "https://eardrvm-438d2.firebaseio.com",
    projectId: "eardrvm-438d2",
    storageBucket: "eardrvm-438d2.appspot.com",
    messagingSenderId: "984371968919",
    appId: "1:984371968919:web:165e0dd164409f6c"
  };
  firebase.initializeApp(config);
  }
}
