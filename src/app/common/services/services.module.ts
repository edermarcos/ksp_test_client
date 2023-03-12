import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataServiceFactory } from './data-service.factory';

@NgModule({
  declarations: [],
  providers: [
    DataServiceFactory
  ],
  imports: [
    CommonModule
  ]
})
export class ServicesModule { }
