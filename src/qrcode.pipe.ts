import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
    name: 'qrcode'
})
export class QRCodePipe implements PipeTransform {
    constructor(protected sanitizer: DomSanitizer) {}

    public transform(value: any, type: string): SafeHtml {
        // target => <div [innerHtml]="stringHere | qrcode"></div>
        // Return a Base64 svg
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
}
