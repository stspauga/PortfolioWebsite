import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-resume-download',
  templateUrl: './pdf-resume-download.component.html',
  styleUrls: ['./pdf-resume-download.component.css']
})

export class PdfResumeDownloadComponent implements OnInit {
  fileUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
    const filePath = '/assets/Tuliloa_Resume.pdf';

    this.loadPdfContent(filePath);
  }

  loadPdfContent(filePath: string) {
    const fileReader = new FileReader();

    fileReader.onload = (e) => {
      const data = e.target?.result as string;
      const blob = new Blob([data], { type: 'application/pdf' });
      this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    };

    fileReader.onerror = () => {
      console.error('Error reading the file.');
    };
    
    fileReader.readAsDataURL(new Blob([filePath]));
  }

  downloadPdf() {
    if (this.fileUrl) {
      const link = document.createElement('a');
      link.href = this.fileUrl.toString();
      link.download = 'Tuliloa_Resume.pdf';
      link.click();
    }
  }
}
