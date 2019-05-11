import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'qrcode'
})
export class NgxQrcodePipe implements PipeTransform {
  googleApi = 'https://chart.googleapis.com/chart?cht=qr&';
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: any, type: string): SafeHtml {
    // target => <div [innerHtml]="stringHere | qrcode"></div>
    // Return a Base64 svg
    // console.log(this.sanitizer.bypassSecurityTrustHtml(value));

    const htmlRet = `<img src="${this.google(value)}" />`;
    return htmlRet;
  }

  private google(value: string): string {
    const queryParam = {
      chs: '500x500',
      chld: 'L|1',
      chl: value ? value.split(' ').join('+') : ''
    };

    return (
      this.googleApi +
      Object.entries(queryParam)
        .map(elt => `${elt[0]}=${elt[1]}`)
        .join('&')
    );
  }
}
