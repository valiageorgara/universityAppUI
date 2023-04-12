import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
// import {A} from "@angular/cdk/keycodes";
import {AboutComponent} from "./about/about.component";
import {ApplicationComponent} from "./application/application.component";
import {ViewComponent} from "./view/view.component";

const routes: Routes = [
  {
    path:"home", component:HomeComponent
  },
  {
    path:"about", component:AboutComponent
  },
  {
    path:"application", component:ApplicationComponent
  },
  {
    path:"view", component:ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
