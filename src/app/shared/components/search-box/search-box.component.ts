import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs'

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;
  @Input()
  public initialValue: string = '';

  @Input()
  public placeholder: string = '';

  @Output()
  private emitter: EventEmitter<string> = new EventEmitter();

  @Output()
  private debounceEmitter: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
      .pipe(
        debounceTime(400)
      )
      .subscribe( value => {
        this.debounceEmitter.emit(value);
      });
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  @ViewChild('txtInput')
  public txtInput!: ElementRef<HTMLInputElement>;

  searchCountry(): void {
    if(this.txtInput.nativeElement.value.length === 0) return;
    this.emitter.emit(this.txtInput.nativeElement.value);
  }

  OnKeyPress( term: string) {
    this.debouncer.next(term);
  }

}
