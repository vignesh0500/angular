import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LoginComponent} from './components/login/login.component';
import { RegisterComponent } from './components/registration/register/register.component';
import { HomeComponent } from './components/home/home/home.component';
import { NabarComponent } from './components/nabar/nabar.component';

const routes: Routes = [
  {
    path:'',
    component: RegisterComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'', redirectTo:'home', pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
