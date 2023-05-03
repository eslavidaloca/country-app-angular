import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'country-table',
  templateUrl: './country-table.component.html',
  styles: [
    `img {
      width: 25px;
    }`
  ]
})
export class CountryTableComponent implements OnChanges {

  public notFound: boolean = false;

  @Input()
  public countries: Country[] = [];

  @Input()
  public isLoading: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if(changes['isLoading'].currentValue === false &&
      changes['isLoading'].previousValue === true &&
      this.countries.length === 0)
      this.notFound = true;
    else
      this.notFound = false;
  }
}
