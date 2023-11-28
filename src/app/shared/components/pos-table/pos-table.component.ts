import { Component, OnInit, inject } from '@angular/core';
import { PosService } from '../../services/pos.service';
import { Ipos } from '../../models/pos';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pos-table',
  templateUrl: './pos-table.component.html',
  styleUrls: ['./pos-table.component.scss']
})
export class PosTableComponent implements OnInit {
  private _posService = inject(PosService)


  objArray: Array<Ipos> = []


  constructor() { }

  ngOnInit(): void {

    this.getProdItem();
    this.cancelBill();

  }
  cancelBill() {
    this._posService.billSubjectAObs$.subscribe(res => {
      this.objArray = res;

    });

  }

  getProdItem() {
    this._posService.prodObjAsObs$.subscribe(data => {

      if (!this.objArray.some(ele => ele.id === data.id)) {
        this.objArray.push({ ...data, quant: 1, total: data.price });
        this._posService.getBillObjArra(this.objArray)


      } else {
        let getIndex = this.objArray.findIndex(ele => ele.id === data.id)
        this.objArray[getIndex].quant!++;
        this.objArray[getIndex].total = this.objArray[getIndex].quant! * +this.objArray[getIndex].price
        this._posService.getBillObjArra(this.objArray)

      }
    })
  }


  deleteItem(id: string) {

    let confDelete = confirm("Do You Want remove item from list ?")
    if (confDelete) {
      this.objArray = this.objArray.filter(ele => ele.id !== id)
      this._posService.getBillObjArra(this.objArray)
    }


  }
  onAddRemQuant(id: string, status: string) {
    if (status === "add") {
      console.log("add button clicked");
      let getIndex = this.objArray.findIndex(ele => ele.id === id)
      // this.objArray[getIndex].quant!++;
      this._posService.getProdObj(this.objArray[getIndex])


    } else if (status === "remove") {
      console.log("remove button clicked");
      let getIndex = this.objArray.findIndex(ele => ele.id === id)

      if (this.objArray[getIndex].quant! === 1) {
        this.deleteItem(id)
      } else {
        this.objArray[getIndex].quant = this.objArray[getIndex].quant! - 2;
        this._posService.getProdObj(this.objArray[getIndex])
      }


    }

  }

}
