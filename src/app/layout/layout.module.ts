import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';
import { AppRoutingModule } from "./../app-routing.module";
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [BasicLayoutComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ComponentsModule
  ],
  exports:[BasicLayoutComponent]
})
export class LayoutModule { }
