import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = '';

  @Output()
  private emitter: EventEmitter<string> = new EventEmitter();

  @ViewChild('txtInput')
  public txtInput!: ElementRef<HTMLInputElement>;

  searchCountry(): void {
    if(this.txtInput.nativeElement.value.length === 0) return;
    this.emitter.emit(this.txtInput.nativeElement.value);
  }

}
