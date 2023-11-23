import { Component, OnInit, inject } from '@angular/core';
import { PosService } from '../../services/pos.service';
import { Ipos } from '../../models/pos';

@Component({
  selector: 'app-pos-table',
  templateUrl: './pos-table.component.html',
  styleUrls: ['./pos-table.component.scss']
})
export class PosTableComponent implements OnInit {
  private _posService = inject(PosService)

  objArray: Array<Ipos> = []
  quantity: number = 1;
  total: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.getProdItem()

  }

  getProdItem() {
    this._posService.prodObjAsObs$.subscribe(data => {
      if (!this.objArray.some(ele => ele.id === data.id)) {
        this.objArray.push({ ...data, quant: 1 });
      } else {
        let getIndex = this.objArray.findIndex(ele => ele.id === data.id)
        this.objArray[getIndex].quant!++
      }
    })
  }

}
