import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatagorysComponent } from './pages/catagorys/catagorys.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category', component: CatagorysComponent },
  // { path: '', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
