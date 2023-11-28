import { Component, Inject, OnInit, inject } from '@angular/core';
import { PosService } from '../../services/pos.service';
import { Ipos } from '../../models/pos';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaxLengthValidator } from '@angular/forms';


@Component({
  selector: 'app-bill-reciept',
  templateUrl: './bill-reciept.component.html',
  styleUrls: ['./bill-reciept.component.scss']
})
export class BillRecieptComponent implements OnInit {

  objArr !: Array<Ipos>

  totQuant : number = 0;
  subTotAmt : number = 0;
  totAmt : number = 0;
  vatAmt : number = 0;
  discAmt : number = 0;
  recieptNo: number = Math.floor(Math.random() * 1000) ;
  billDate: Date = new Date()


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _dialogRef: MatDialogRef<BillRecieptComponent>) { }

  ngOnInit(): void {
    this.objArr = this.data.arr;
    this.totQuant = this.data.totQuant;
    this.totAmt = this.data.totAmt;
    this.subTotAmt = this.data.subTotalAmt;
    this.vatAmt = this.data.vatAmt;
    this.discAmt = this.data.discAmt;

  }

  onBillPrint(){
    console.log("print clicked");
    window.print();
    
  }

  close(){
    this._dialogRef.close();
  }
 



}
