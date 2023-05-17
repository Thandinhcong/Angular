import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './conponents/header/header.component';
import { FooterComponent } from './conponents/footer/footer.component';
import { ProductsComponent } from './conponents/products/products.component';
import { CatagorysComponent } from './pages/catagorys/catagorys.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SigninComponent } from './pages/signin/signin.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BaseAdminComponent } from './admin/base-admin/base-admin.component';
;
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    CatagorysComponent,
    SigninComponent,
    ProfileEditorComponent,
    NotFoundComponent,
    BaseAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
