import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatagorysComponent } from './pages/catagorys/catagorys.component';
import { SigninComponent } from './pages/signin/signin.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BaseAdminComponent } from './admin/base-admin/base-admin.component';
import { HeaderComponent } from './conponents/header/header.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AddProductComponent } from './conponents/add-product/add-product.component';
import { UpdateProductComponent } from './conponents/update-product/update-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category', component: CatagorysComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'update-product', component: UpdateProductComponent },
  {
    path: "admin", component: BaseAdminComponent, children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: 'dashbroad', component: HeaderComponent },
      { path: "header", component: HeaderComponent }
    ]
  },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
