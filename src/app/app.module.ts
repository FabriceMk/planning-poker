import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { MaterialExporterModule } from './material-exporter.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { PokerModule } from './poker/poker.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,

    // AngularMaterial
    BrowserAnimationsModule,

    // Base modules
    CoreModule,
    SharedModule,
    MaterialExporterModule,

    // Features Modules
    PokerModule,

    // App Routing Module
    AppRoutingModule,

    // Service Worker
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
