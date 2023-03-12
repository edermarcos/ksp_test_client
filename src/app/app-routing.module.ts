import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { EmployeesModule } from './pages/employees/employees.module';
import { LoginModule } from './pages/login/login.module';
import { SignupModule } from './pages/signup/signup.module';

const routes: Routes = [
  // {
  //   path: 'dashboard',
  //   loadChildren: () => DashboardModule
  // },
  {
    path: 'employees',
    loadChildren: () => EmployeesModule
  },
  {
    path: 'login',
    loadChildren: () => LoginModule
  },
  {
    path: 'signup',
    loadChildren: () => SignupModule
  },
  { path: '**', redirectTo: '/employees', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
