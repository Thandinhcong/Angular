import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagorysComponent } from './catagorys.component';

describe('CatagorysComponent', () => {
  let component: CatagorysComponent;
  let fixture: ComponentFixture<CatagorysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatagorysComponent]
    });
    fixture = TestBed.createComponent(CatagorysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
