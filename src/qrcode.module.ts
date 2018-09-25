import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { QRCodePipe } from './qrcode.pipe';

@NgModule({
    declarations: [QRCodePipe],
    providers: [BrowserModule],
    exports: [QRCodePipe]
})
export class NgQRCodePipeModule {}
