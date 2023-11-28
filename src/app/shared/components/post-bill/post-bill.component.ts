import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { Ipos } from '../../models/pos';
import { PosService } from '../../services/pos.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BillRecieptComponent } from '../bill-reciept/bill-reciept.component';


@Component({
  selector: 'app-post-bill',
  templateUrl: './post-bill.component.html',
  styleUrls: ['./post-bill.component.scss']
})
export class PostBillComponent implements OnInit {

  isVatDisabled: boolean = false;

  subTotal: number = 0;
  noOfItem: number = 0;
  vatTaxAmt: number = 0;
  vatPerc: number = 0;
  testAmt: number = 0;
  testNgModel: number = 0;

  discPerc: Number = 0;
  discAmt: number = 0;
  totalBill: number = 0;
  @ViewChild("vatTxaxPerc") vatTxaxPerc !: ElementRef;
  @ViewChild("discount") discount !: ElementRef;

  objArr!: Array<Ipos>;
  private _posService = inject(PosService)


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.onSubTotal()

  }

  onSubTotal() {

    this._posService.billSubjectAObs$.subscribe(res => {

      this.objArr = res;

      let subtotal = 0;
      let noOfQuant = 0;

      this.objArr = res

      if (this.objArr.length > 0) {
        this.objArr.forEach(element => {
          subtotal = +subtotal + +element.total!;
          noOfQuant = noOfQuant + element.quant!;


          this.subTotal = subtotal
          this.noOfItem = noOfQuant

          this.totalBillAmt()
          this.getVatPerc();

          this.getDiscPerc();

        });
      } else {
        this.subTotal = 0;
        this.noOfItem = 0;
        this.vatTaxAmt = 0;
        this.discAmt = 0;
        this.totalBill = 0;
        this.discPerc = 0;
        this.vatPerc = 0;


      }

    })
  }

  onBillCancel() {

    let confDelete = confirm("Do You Want to delete ?")
    if (confDelete) {
      this.objArr = [];
      this._posService.getBillObjArra(this.objArr);
      this.onSubTotal();
      this.vatTxaxPerc.nativeElement.value = "";
      this.discount.nativeElement.value = "";
    }

  }


  getVatPerc() {
    this.vatTaxAmt = this.subTotal * (this.vatPerc / 100);
    this.totalBillAmt()
  }




  getDiscPerc() {
    // this.discPerc = +(eve.target as HTMLInputElement).value;
    this.discAmt = this.subTotal * (+this.discPerc / 100)
    this.totalBillAmt()

  }
  totalBillAmt() {
    this.totalBill = this.subTotal + this.vatTaxAmt - this.discAmt;
  }

  onProcessBill() {
    this.dialog.open(BillRecieptComponent, {width:"500px", height:"70vh", data: { arr: this.objArr, subtototat: this.subTotal, vatAmt: this.vatTaxAmt, discAmt: this.discAmt, subTotalAmt:this.subTotal, totAmt: this.totalBill,totQuant: this.noOfItem } })
  }
}
