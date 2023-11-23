import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProdListComponent } from './post-prod-list.component';

describe('PostProdListComponent', () => {
  let component: PostProdListComponent;
  let fixture: ComponentFixture<PostProdListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostProdListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostProdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
