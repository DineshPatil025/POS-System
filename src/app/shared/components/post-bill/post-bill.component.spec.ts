import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBillComponent } from './post-bill.component';

describe('PostBillComponent', () => {
  let component: PostBillComponent;
  let fixture: ComponentFixture<PostBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
