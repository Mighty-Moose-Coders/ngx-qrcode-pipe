import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
    name: 'qrcode'
})
export class QRCodePipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {}

    public transform(value: any, type: string): SafeHtml {
        console.log(type);
        // target => <div [innerHtml]="stringHere | qrcode"></div>
        // Return a Base64 svg
        console.log(this.sanitizer.bypassSecurityTrustHtml(value));
        return value;
    }
}
