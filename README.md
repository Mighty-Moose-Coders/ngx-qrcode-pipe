# NgxQrcodePipe
Angular lib.
Still WIP.

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
