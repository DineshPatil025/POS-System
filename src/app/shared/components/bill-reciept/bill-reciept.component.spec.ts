import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillRecieptComponent } from './bill-reciept.component';

describe('BillRecieptComponent', () => {
  let component: BillRecieptComponent;
  let fixture: ComponentFixture<BillRecieptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillRecieptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillRecieptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
