import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TccFrontComponent } from './tcc-front.component';

describe('TccFrontComponent', () => {
  let component: TccFrontComponent;
  let fixture: ComponentFixture<TccFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TccFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TccFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
