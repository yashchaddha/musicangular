import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{FavouriteComponent} from './favourite/favourite.component';
import{HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';

const routes: Routes = [
  { path:"", pathMatch:'full',redirectTo:'/home'},
  {path:"home", component:HomeComponent},
  {path:"favs", component:FavouriteComponent },
  {path:"detail",component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
