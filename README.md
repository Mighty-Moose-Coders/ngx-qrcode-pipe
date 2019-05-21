# NgxQrcodePipe
Angular lib.
Still WIP.
(https://img.shields.io/npm/v/ngx-qrcode-pipe.svg)](https://www.npmjs.com/package/ngx-qrcode-pipe.svg)

Add NgxQrcodePipeModule to your NgModule: 

```TypeScript
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxQrcodePipeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Then in your HTML

```TypeScript
<div [innerHTML]="value | qrcode"></div>
```
