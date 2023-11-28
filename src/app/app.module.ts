import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PosTableComponent } from './shared/components/pos-table/pos-table.component';
import { PostBillComponent } from './shared/components/post-bill/post-bill.component';
import { PostProdListComponent } from './shared/components/post-prod-list/post-prod-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { BillRecieptComponent } from './shared/components/bill-reciept/bill-reciept.component';
import { ProdTooTipDirective } from './shared/directives/prod-too-tip.directive';

@NgModule({
  declarations: [
    AppComponent,
    PosTableComponent,
    PostBillComponent,
    PostProdListComponent,
    BillRecieptComponent,
    ProdTooTipDirective,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
