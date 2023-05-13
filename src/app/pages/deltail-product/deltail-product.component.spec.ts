import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeltailProductComponent } from './deltail-product.component';

describe('DeltailProductComponent', () => {
  let component: DeltailProductComponent;
  let fixture: ComponentFixture<DeltailProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeltailProductComponent]
    });
    fixture = TestBed.createComponent(DeltailProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
