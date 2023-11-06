import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentJobComponent } from './current-job.component';

describe('CurrentJobComponent', () => {
  let component: CurrentJobComponent;
  let fixture: ComponentFixture<CurrentJobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentJobComponent]
    });
    fixture = TestBed.createComponent(CurrentJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
