import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllowedRolesGuardService } from './user-accounts/services/allowed-roles-guard.service';
import { LoggedInGuardService } from './user-accounts/services/logged-in-guard.service';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UserAccountPageComponent } from './pages/user-account-page/user-account-page.component';

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
  {
    path: "admin/user-accounts",
    component: UserAccountPageComponent,
    canActivate: [AllowedRolesGuardService],
    data: {
      title: "Admin User Account",
      roles: ["admin"],
    },
  },
  {
    path: "admin",
    pathMatch: "full",
    redirectTo: "/admin/user-accounts",
  },
  { path: "", pathMatch: "full", redirectTo: "/home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
