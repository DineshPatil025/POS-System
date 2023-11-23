import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { Ipos } from '../../models/pos';
import { PosService } from '../../services/pos.service';

@Component({
  selector: 'app-post-bill',
  templateUrl: './post-bill.component.html',
  styleUrls: ['./post-bill.component.scss']
})
export class PostBillComponent implements OnInit {

  subtotal!: number;
  noOfItem!: number ;

  objArr!: Array<Ipos>;
  private _posService = inject(PosService)

  
  constructor() { }

  ngOnInit(): void {

    this._posService.billSubjectAObs$.subscribe(res => {
      this.objArr = res;
      console.log("this is from pos-bill",this.objArr);
     let subtotal = 0;
     let noOfQuant = 0;
      res.forEach(element => {
        subtotal = +subtotal + +element.total!;
        noOfQuant = noOfQuant +element.quant!;

        this.subtotal = subtotal
        this.noOfItem = noOfQuant
      });
      
    })
   
    
   
  }

  onBillCancel(){
    console.log("cancel bill clicked");
    this.objArr = [];
    this._posService.clearBill()
    
  }
}
