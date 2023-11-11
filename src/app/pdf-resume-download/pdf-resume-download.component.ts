import { Component } from '@angular/core';
// import { PdfDownloadService } from './pdf-download.service';

@Component({
  selector: 'app-pdf-resume-download',
  templateUrl: './pdf-resume-download.component.html',
  styleUrls: ['./pdf-resume-download.component.css']
})
export class PdfResumeDownloadComponent {
  // pdfDownloadService: any;
  // // constructor(private pdfDownloadService: PdfDownloadService) {}

  // downloadPdf() {
  //   const pdfUrl = 'URL_TO_YOUR_PDF_FILE';
  //   this.pdfDownloadService.downloadPdf(pdfUrl).subscribe((blob: Blob) => {
  //     const link = document.createElement('a');
  //     link.href = window.URL.createObjectURL(blob);
  //     link.download = 'downloaded.pdf';
  //     link.click();
  //   });
  // }
}
