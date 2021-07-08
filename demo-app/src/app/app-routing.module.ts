import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoggedInGuardService } from './user-accounts/services/logged-in-guard.service';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {
    path: "home",
    component: HomePageComponent,
    canActivate: [LoggedInGuardService],
    data: {
      title: "App Home"
    },
  },
  { path: "login", component: LoginPageComponent },
  { path: "", pathMatch: "full", redirectTo: "/home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
