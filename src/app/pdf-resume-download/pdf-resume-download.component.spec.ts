import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfResumeDownloadComponent } from './pdf-resume-download.component';

describe('PdfResumeDownloadComponent', () => {
  let component: PdfResumeDownloadComponent;
  let fixture: ComponentFixture<PdfResumeDownloadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdfResumeDownloadComponent]
    });
    fixture = TestBed.createComponent(PdfResumeDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
