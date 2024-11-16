import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { KOLAYAMFORSALESComponent } from './kolayam-for-sales/kolayam-for-sales.component';
import { BYJOBROLComponent } from './by-job-rol/by-job-rol.component';
import { SUPPLIERQUALITYENGINEERComponent } from './supplier-quality-engineer/supplier-quality-engineer.component';
import { BUYERComponent } from './buyer/buyer.component';
import { LOGISTICSComponent } from './logistics/logistics.component';
import { PRICINGComponent } from './pricing/pricing.component';
import { HowToGetStartedComponent } from './how-to-get-started/how-to-get-started.component';

@NgModule({
  declarations: [
    AppComponent,
    KOLAYAMFORSALESComponent,
    BYJOBROLComponent,
    SUPPLIERQUALITYENGINEERComponent,
    BUYERComponent,
    LOGISTICSComponent,
    PRICINGComponent,
    HowToGetStartedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
