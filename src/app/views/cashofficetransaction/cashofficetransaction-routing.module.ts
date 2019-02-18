import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { QueryRecieptComponent } from './query-receipt.component' ;
import { CancelpaymentRecieptComponent } from './cancel-paymentreciept.component';
import { PrintbankslipComponent } from './print-depositslip.component';
import {cashofficeactivityComponent } from './cash-officeactivity.component';
import { CashTillComponent } from './cash-tillactivity.component';
import { PaymentreceiptComponent } from './payment-receipt.component';


const routes: Routes = [
  {
    path: '',
    // component: CashOfficeReportsComponent, 
    data: { title: 'Cash Office Transactions' } ,

    children: [
      {
        path: 'QueryReciept',
        component: QueryRecieptComponent,
        data: {
          title: 'Query Receipt'
        }

      },
        {
          path: 'Reciept',
        component: CancelpaymentRecieptComponent,
        data: {
          title: 'Reciept'
        }
      },
      {
        path: 'cashofficeactivity',
      component: cashofficeactivityComponent,
      data: {
        title: 'cashofficeactivity'
      }
    },
    
    {
      path: 'paymentreceipt',
    component: PaymentreceiptComponent,
    data: {
      title: 'paymentreceipt'
    }
  },
    {
      path: 'cashtillactivity',
    component: CashTillComponent,
    data: {
      title: 'cashtillactivity'
    }
  },
      {
        path: 'PrintSlip',
      component: PrintbankslipComponent,
      data: {
        title: 'PrintSlip'
      }
    },
      
      {
        path: '**',
        redirectTo: '' /// dbg. TO-DO 404: Page Not Found component.
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashOfficeTransactionRoutingModule {}  
