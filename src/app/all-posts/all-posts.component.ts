import { Component, OnInit, OnDestroy } from '@angular/core';
import * as firebase from 'firebase'
import * as _ from 'lodash';
import { MyFireService } from '../shared/myfire.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit, OnDestroy {
  allRef: any;
  loadMoreRef: any;
  all: any = [];

  constructor(private myFire: MyFireService, private user: UserService) { }

  ngOnInit() {

    this.allRef = firebase.database().ref('allposts').limitToFirst(6);
    this.allRef.on('child_added', data => {
      this.all.push({
        key: data.key,
        data: data.val()
      });
    });
  } 

  onLoadMore(){
    if (this.all.length > 0) {
      const lastLoadedPost = _.last(this.all);
      const lastLoadedPostKey = lastLoadedPost.key; 

      this.loadMoreRef = firebase.database().ref('allposts').startAt(null, lastLoadedPostKey).limitToFirst(2+1)

      this.loadMoreRef.on('child_added', data => {

        if (data.key === lastLoadedPostKey) {
        return;
      } else {
        this.all.push({
          key: data.key,
          data: data.val()
        });
      }
    });
  }
}


  ngOnDestroy() {
    this.allRef.off();
    if (this.loadMoreRef){
      this.loadMoreRef.off();
    }
  }

}
