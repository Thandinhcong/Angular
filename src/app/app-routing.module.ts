import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatagorysComponent } from './pages/catagorys/catagorys.component';
import { SigninComponent } from './pages/signin/signin.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BaseAdminComponent } from './admin/base-admin/base-admin.component';
import { HeaderComponent } from './conponents/header/header.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category', component: CatagorysComponent },
  { path: 'signin', component: SigninComponent },
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
