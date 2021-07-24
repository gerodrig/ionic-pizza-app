import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

//lazy loading routing structure.
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'myOrder',
    loadChildren: () => import('./pages/order-manager/order-manager.module').then( m => m.MyOrderPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'checkCurrentOrder',
    loadChildren: () => import('./pages/check-current-orders/check-current-orders.module').then( m => m.CheckCurrentOrdersPageModule)
  },
  {
    path: 'previousOrders',
    loadChildren: () => import('./pages/previous-orders/previous-orders.module').then( m => m.PreviousOrdersPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
