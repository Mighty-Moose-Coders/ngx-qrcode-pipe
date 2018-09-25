import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

import { QRCodePipe } from './qrcode.pipe';

describe('QRCodePipe', () => {
    let pipe: QRCodePipe;
    let sanitizer: DomSanitizer;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [DomSanitizer]
        });
        pipe = new QRCodePipe(sanitizer);
    });

    it('To SafeHTML', () => {
        expect(pipe.transform(0, 'number')).toEqual(0);
    });
});
