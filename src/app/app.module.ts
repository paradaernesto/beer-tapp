import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProductionComponent } from './components/production/production.component';
import { SalesComponent } from './components/sales/sales.component';
import { StockComponent } from './components/stock/stock.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductionComponent,
    SalesComponent,
    StockComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
