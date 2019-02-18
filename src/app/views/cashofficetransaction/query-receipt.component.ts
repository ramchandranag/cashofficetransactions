import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; 

@NgModule({
  imports: [
    FormControl,
    FormGroup, 
    FormsModule,
    ReactiveFormsModule,
    Validators]
})

@Component({
  templateUrl: 'query-report.component.html'
})
export class QueryRecieptComponent {
  QueryReciept = FormGroup;
  tpol = FormGroup;

  cashOfficeForm = new FormGroup({
    recieptDesc: new FormControl('', Validators.required),
    cashier: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required)

  });
  QueryReciept1 = new FormGroup({
    recieptDesc1: new FormControl('', Validators.required),
    startDate1: new FormControl('', Validators.required),
    branchCode1: new FormControl('', Validators.required),
    branchCode2: new FormControl('', Validators.required),
    arrears: new FormControl('', Validators.required),
    eAmount: new FormControl('', Validators.required),
    aAmount: new FormControl('', Validators.required),
    rId: new FormControl('', Validators.required),
    amnt: new FormControl('', Validators.required)

  });
  onSubmit(){
    this.displayReport = true ; // show container for the results. 
  
    console.table(this.cashOfficeForm.value) ;
  }
  onSubmit1(){
    this.displayReport1 = true ; // show container for the results. 
  
    console.table(this.QueryReciept1.value) ;
  }
  
  
  displayReport = false ;
  displayReport1 = false ;

  toggleDisplayReport(){
    this.displayReport = !this.displayReport ; // false
  }
}
