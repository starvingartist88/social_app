import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RouteGuard} from "./auth/route-guard";

import {HomeComponent} from "./home/home.component";
import {AllPostsComponent} from "./all-posts/all-posts.component";
import {FollowingComponent} from "./following/following.component";
import {FavoritesComponent} from "./favorites/favorites.component";
import {MyPostsComponent} from "./my-posts/my-posts.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {LoginComponent} from "./auth/login/login.component";
import {MyFeedComponent} from "./my-feed/my-feed.component";
import {EditProfileComponent} from "./edit-profile/edit-profile.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'allposts', component: AllPostsComponent, canActivate: [RouteGuard]},
  { path: 'following', component: FollowingComponent, canActivate: [RouteGuard]},
  { path: 'favorites', component: FavoritesComponent, canActivate: [RouteGuard]},
  { path: 'myposts', component: MyPostsComponent, canActivate: [RouteGuard]},
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'my-feed', component: MyFeedComponent },
  { path: 'edit-profile', component: EditProfileComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
