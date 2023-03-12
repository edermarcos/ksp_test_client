import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from "../../common/components/components.module";
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
  }
]

@NgModule({
    declarations: [
        EmployeesComponent
    ],
   imports: [
      CommonModule,
      RouterModule.forChild(routes),
      ComponentsModule,
      ReactiveFormsModule,
   ],
})
export class EmployeesModule { }
