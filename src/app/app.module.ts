import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { TopLogoBarComponent } from './components/top-logo-bar/top-logo-bar.component';
import { FirstContainerComponent } from './components/first-container/first-container.component';
import { OurSpacesComponent } from './components/our-spaces/our-spaces.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  //{ path: 'collection', component: CollectionComponent },

  // {
  //   path: 'products',
  //   component: ProductsComponent,
  // },
  // {
  //   path: 'products/:title',
  //   component: ProductDetailsComponent,
  // },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    TopLogoBarComponent,
    FirstContainerComponent,
    OurSpacesComponent,
  ],
  
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
