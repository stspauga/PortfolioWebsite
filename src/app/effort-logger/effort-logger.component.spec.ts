import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffortLoggerComponent } from './effort-logger.component';

describe('EffortLoggerComponent', () => {
  let component: EffortLoggerComponent;
  let fixture: ComponentFixture<EffortLoggerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EffortLoggerComponent]
    });
    fixture = TestBed.createComponent(EffortLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
