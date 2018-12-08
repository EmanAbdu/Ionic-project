import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
 
import { MenuPage } from './menu.page';
 
import { SecondPageModule } from './../second/second.module';
import { FirstPageModule } from './../first/first.module';
import { MenuRoutingModule } from './menu-routing.module';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuRoutingModule,
    FirstPageModule,
    SecondPageModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}