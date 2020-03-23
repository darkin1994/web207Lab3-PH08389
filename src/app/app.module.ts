import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ItemsComponent } from './items/items.component';
import { SlideComponent } from './slide/slide.component';
import { BodyComponent } from './body/body.component';
import { RightComponent } from './right/right.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';



const appRoutes: Routes = [
  {
    path : 'About',
    component : AboutComponent
  },
  {
    path : 'Index',
    component : ProductListComponent
  },
  {
    path : 'Manager',
    component : ProductManagerComponent
  },
  {
    path : 'Detail/:id',
    component : ProductDetailComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/Index',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ItemsComponent,
    SlideComponent,
    BodyComponent,
    RightComponent,
    ProductComponent,
    AboutComponent,
    ProductListComponent,
    ProductManagerComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
