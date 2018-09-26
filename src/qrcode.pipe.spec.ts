import { ɵDomSanitizerImpl, SafeHtml } from '@angular/platform-browser';

import { QRCodePipe } from './qrcode.pipe';

describe('QRCodePipe', () => {
    let pipe: QRCodePipe;

    beforeEach(() => {
        pipe = new QRCodePipe(new ɵDomSanitizerImpl(null));
    });
    it('To SafeHTML', () => {
        const safeHTML: any = pipe.transform(0, 'number');
        expect(JSON.stringify(safeHTML)).toEqual('0');
    });
});
