import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppTableComponent } from './app-table/app-table.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { AppButtonIconComponent } from './app-button-icon/app-button-icon.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AppCardComponent } from './app-card/app-card.component';

@NgModule({
  declarations: [
    AppTableComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    AppButtonIconComponent,
    AppCardComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  exports: [
    AppTableComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    AppButtonIconComponent,
    AppCardComponent
  ]
})
export class ComponentsModule { }
