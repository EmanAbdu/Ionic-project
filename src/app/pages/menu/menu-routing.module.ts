import { SecondPage } from './../second/second.page';
import { MenuPage } from './menu.page';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FirstPage } from '../first/first.page';
 
const routes: Routes = [ 
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'first',
        outlet: 'menucontent',
        component: FirstPage
      },
      {
        path: 'second',
        outlet: 'menucontent',
        component: SecondPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/(menucontent:first)',
  }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MenuRoutingModule { }