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
  templateUrl: 'cash-tillactivity.component.html'
})
export class CashTillComponent {

  cashierInput = new FormGroup({
  branchCode: new FormControl('', Validators.required)
  });
  onSubmit(){
    this.displayReport = true ; // show container for the results. 
  
    console.table(this.cashierInput.value) ;
  }

  
  
  displayReport = false ;

  toggleDisplayReport(){
    this.displayReport = !this.displayReport ; // false
  }
}
