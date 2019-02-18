// Angular
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// Forms Component
import { FormsComponent } from './forms.component';
// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';
// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';
// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';
// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';
// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';

// Components Routing

import { GlobalServices,HttpErrorInterceptor } from '../../services';
import { QueryRecieptComponent } from './query-receipt.component';
import { CashOfficeTransactionRoutingModule } from './cashofficetransaction-routing.module';
import { CancelpaymentRecieptComponent } from './cancel-paymentreciept.component';
import { PrintbankslipComponent } from './print-depositslip.component';
import { cashofficeactivityComponent } from './cash-officeactivity.component';
import { CashTillComponent } from './cash-tillactivity.component';
import { PaymentreceiptComponent } from './payment-receipt.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    TooltipModule.forRoot(),
    CashOfficeTransactionRoutingModule
  ],
  declarations: [
    QueryRecieptComponent,
    CancelpaymentRecieptComponent,
    PrintbankslipComponent,
    cashofficeactivityComponent,
    CashTillComponent,
    PaymentreceiptComponent,
    FormsComponent    
  ],providers:[GlobalServices,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    }]
})
export class CashOfficeTransactionMasterModule { }
