# ngx-qrcode-pipe

A simple directive to add qrcode in your app.

## Installation

To install this library, run:

```bash
$ npm install ngx-qrcode-pipe  --save
```

## Getting started

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the library
import { QRCodeModule } from 'ngx-qrcode-pipe';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,

        // Specify QRCodeModule as an import
        QRCodeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
```

## Contribute

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```
