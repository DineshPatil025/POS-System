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
      // this._posService.getObjArra(this.objArray);
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

    let deleteIndex = this.objArray.findIndex(ele => ele.id === id);
    // this.objArray = this.objArray.splice(deleteIndex, 1);
    this.objArray = this.objArray.filter(ele => ele.id !== id)
    console.log(this.objArray);
    this._posService.getBillObjArra(this.objArray)
  }


}
