import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppTableComponent } from './app-table/app-table.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { AppButtonIconComponent } from './app-button-icon/app-button-icon.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    AppTableComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    AppButtonIconComponent
  ],
   imports: [
      CommonModule,
      RouterLink,
   ],
  exports: [
    AppTableComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    AppButtonIconComponent
  ]
})
export class ComponentsModule { }
