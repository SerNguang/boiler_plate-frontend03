import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CartButtonWidgetComponent } from './cart-button-widget.component';

describe('CartButtonWidgetComponent', () => {
  let component: CartButtonWidgetComponent;
  let fixture: ComponentFixture<CartButtonWidgetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CartButtonWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartButtonWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
