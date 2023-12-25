import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-resume-download',
  templateUrl: './pdf-resume-download.component.html',
  styleUrls: ['./pdf-resume-download.component.css']
})

export class PdfResumeDownloadComponent {
  fileUrl: SafeResourceUrl | undefined;
    constructor(private sanitizer: DomSanitizer) {}
    ngOnInit() {
        const data = 'some text';
        const blob = new Blob([data], {
            type: 'application/octet-stream'
        });
        this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    }
}
