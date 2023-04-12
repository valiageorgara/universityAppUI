import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {A} from "@angular/cdk/keycodes";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {ApplicationComponent} from "./application/application.component";

const routes: Routes = [
  {
    path:"home", component:HomeComponent
  },
  {
    path:"about", component:AboutComponent
  },
  {
    path:"contact", component:ContactComponent
  },
  {
    path:"application", component:ApplicationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
