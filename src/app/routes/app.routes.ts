import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component'
import { SalesComponent } from '../components/sales/sales.component'
import { StockComponent } from '../components/stock/stock.component'
import { ProductionComponent } from '../components/production/production.component'
import { ProfileComponent } from '../components/profile/profile.component'

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'stock', component: StockComponent },
  { path: 'production', component: ProductionComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/home'}
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
