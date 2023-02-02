import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstFormComponent } from 'src/first-form/first-form.component';
import { HomePageComponent } from '../home-page/home-page.component';

const routes: Routes = [
  {
    path: 'form-fill',
    component: FirstFormComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path:'',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
