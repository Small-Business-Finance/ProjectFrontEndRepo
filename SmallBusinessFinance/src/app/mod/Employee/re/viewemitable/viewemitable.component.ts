import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmiTable } from 'src/app/classes/emi-table';
import { LoanService } from 'src/app/shared/loan.service';

@Component({
  selector: 'app-viewemitable',
  templateUrl: './viewemitable.component.html',
  styleUrls: ['./viewemitable.component.css']
})
export class ViewemitableComponent {
  objectcaf: any;
  objemi:any;
  p=1;
  constructor(private location: Location) { }
  ngOnInit() {
    this.objectcaf =this.location.getState();
    this.objemi=this.objectcaf.customerLoanDetails.emitable;
    this.objemi.sort((a: { emidate: string; },b: { emidate: any; }) => a.emidate.localeCompare(b.emidate));
  }
  save123(){
    
  }
}
