import { Component, Input, OnInit, inject } from '@angular/core';
import { Ipos } from '../../models/pos';
import { PosService } from '../../services/pos.service';

@Component({
  selector: 'app-post-prod-list',
  templateUrl: './post-prod-list.component.html',
  styleUrls: ['./post-prod-list.component.scss']
})
export class PostProdListComponent implements OnInit {

  @Input('matTooltip') message!: string
  private _posService = inject(PosService)


  prodArray !: Array<Ipos>
  constructor() { }

  ngOnInit(): void {
    this.getAllProd()
  }
  getAllProd(){
   this.prodArray = this._posService.getAllitem()
  }



  onProdClick(prod:Ipos){
    this._posService.getProdObj(prod)
  }
}
