import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { BasicLayoutComponent } from './layout/basic-layout/basic-layout.component';
import { SigninComponent } from './view/signin/signin.component';

const routes: Routes = [
   { path: '', redirectTo: 'signin', pathMatch: 'full' },//預設 
   { path: '', component: SigninComponent },
   {
    path: '',
    component: BasicLayoutComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'home', // child route path
        component: HomeComponent, // child route component that the router renders
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
