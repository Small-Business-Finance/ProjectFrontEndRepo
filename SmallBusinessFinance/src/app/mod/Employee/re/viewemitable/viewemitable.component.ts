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

  currentRoute: string;
  constructor(private cs:LoanService,public rr:Router){
    console.log(rr.url);
    this.currentRoute=rr.url;
  }
  p: number = 1;
  allenquiries:EmiTable[];

  // ngOnInit(){
  //   this.cs.getEMIdetailList().subscribe((emilist:EmiTable[])=>{
  //   this.allenquiries=emilist;
  // })
  //   }
}
