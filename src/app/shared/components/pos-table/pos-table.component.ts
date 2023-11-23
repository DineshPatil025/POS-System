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

    this.getProdItem()

  }

  getProdItem() {
    this._posService.prodObjAsObs$.subscribe(data => {
      if (!this.objArray.some(ele => ele.id === data.id)) {
        this.objArray.push({ ...data, quant: 1, total: data.price });
        this._posService.getObjArra(this.objArray)
        // console.log(this.objArray);

      } else {
        let getIndex = this.objArray.findIndex(ele => ele.id === data.id)
        this.objArray[getIndex].quant!++;
        this.objArray[getIndex].total = this.objArray[getIndex].quant! * +this.objArray[getIndex].price
        this._posService.getObjArra(this.objArray)

      }
    })
  }


}
