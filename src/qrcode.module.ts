import { NgModule } from '@angular/core';

import { QRCodePipe } from './qrcode.pipe';

@NgModule({
    declarations: [QRCodePipe],
    exports: [QRCodePipe]
})
export class NgQRCodePipeModule {}
