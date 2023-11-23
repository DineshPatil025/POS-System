import { Injectable } from '@angular/core';
import { Ipos } from '../models/pos';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PosService {

  private prodObj$ :Subject<any> = new Subject()
  prodObjAsObs$ = this.prodObj$.asObservable();

  private billSubject$:Subject<Array<Ipos>> = new Subject()
  billSubjectAObs$ = this.billSubject$.asObservable();

  prodArray: Array<Ipos> = [

    {
      name: "computer",
      price: "1000",
      category: "computers",
      description: "",
      image: "computer.jpg",
      id: "1"

    },
    {
      name: "sweater",
      price: "100",
      category: "Clothing",
      description: "fashion, clothes , sweater, wool, cardign,…",
      image: "computer.jpg",
      id: "2"

    },
    {
      name: "tie",
      price: "10",
      category: "Clothing",
      description: "fashion, tie, clothes, accessory , accessoire,…",
      image: "tie.jpeg",
      id: "3"
    },
    // {
      // name: "jacket",
      // price: "190",
      // category: "Clothing",
      // description: "winter jacket ",
      // image: "jacket.jpeg"
    // }

  ]



  constructor() {
    this.getAllitem()
    // this.getProdObj()

  }
  getProdObj(prodObj:Ipos){
    this.prodObj$.next(prodObj)
  }
  getAllitem() {
    return this.prodArray
  }
  getObjArra(objArr:Array<Ipos>){
    console.log(objArr);
    this.billSubject$.next(objArr);

  }

  
}
