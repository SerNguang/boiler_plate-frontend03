import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserFilterWidgetComponent } from './user-filter-widget.component';

describe('UserFilterWidgetComponent', () => {
  let component: UserFilterWidgetComponent;
  let fixture: ComponentFixture<UserFilterWidgetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFilterWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFilterWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
