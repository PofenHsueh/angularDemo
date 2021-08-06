import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from "../app/components/components.module";
import { HomeComponent } from './view/home/home.component';
import { LayoutModule } from './layout/layout.module';
import { SigninComponent } from './view/signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
