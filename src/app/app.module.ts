import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from "./common/components/components.module";
import { ServicesModule } from './common/services/services.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
      BrowserModule,
      AppRoutingModule,
      ComponentsModule,
      ServicesModule,
      HttpClientModule
    ]
})
export class AppModule {}
