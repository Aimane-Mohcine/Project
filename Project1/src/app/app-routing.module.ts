
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KOLAYAMFORSALESComponent} from './kolayam-for-sales/kolayam-for-sales.component';
import {SUPPLIERQUALITYENGINEERComponent} from './supplier-quality-engineer/supplier-quality-engineer.component';
import {BYJOBROLComponent} from './by-job-rol/by-job-rol.component';
import {BUYERComponent} from './buyer/buyer.component';
import {LOGISTICSComponent} from './logistics/logistics.component';
import {PRICINGComponent} from './pricing/pricing.component';
import {HowToGetStartedComponent} from './how-to-get-started/how-to-get-started.component';


const routes: Routes = [
  { path: '', redirectTo: 'BY_JOB_ROLES', pathMatch: 'full' },
  { path: 'BY_JOB_ROLES', component: BYJOBROLComponent },
  { path: 'SUPPLIER_QUALITY_ENGINEER', component: SUPPLIERQUALITYENGINEERComponent },
  { path: 'BUYER', component: BUYERComponent },
  { path: 'LOGISTICS', component: LOGISTICSComponent },
  { path: 'PRICING', component: PRICINGComponent },
  { path: 'KOLAYAM_FOR_SALES', component: KOLAYAMFORSALESComponent },
  { path: 'HOW_TO_GET_STARTED', component: HowToGetStartedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
