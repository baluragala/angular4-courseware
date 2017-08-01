import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionBooleanComponent } from './option-boolean.component';

describe('OptionBooleanComponent', () => {
  let component: OptionBooleanComponent;
  let fixture: ComponentFixture<OptionBooleanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionBooleanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionBooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
