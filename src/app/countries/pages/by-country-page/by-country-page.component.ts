import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'country-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor( private countriesService: CountriesService ) { }

  ngOnInit(): void {
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
    this.countries = this.countriesService.cacheStore.byCountries.countries;
  }

  searchByCountry(term: string): void {
    this.isLoading = true;
    this.countriesService.searchCountry( term )
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      });
  }
}
