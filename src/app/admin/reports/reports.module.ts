import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { ReportsCampaignComponent } from './reports-campaign.component';

@NgModule({
  declarations: [
    ReportsComponent,
    ReportsCampaignComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReportRoutingModule
  ]
})
export class ReportsModule { }