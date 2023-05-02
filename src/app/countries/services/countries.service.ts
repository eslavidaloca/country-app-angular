import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) { }

  searchByAlphaCode(code: string): Observable<Country | null> {
    const url = `${ this.apiUrl }/alpha/${ code }`;
    return this.http.get<Country[]>( url )
      .pipe(
        map( countries => countries.length > 0 ? countries[0] : null),
        catchError( () => of(null))
      );
  }

  searchCapital( term: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ term }`;
    return this.http.get<Country[]>( url )
      .pipe(
        // Con el of([]) estamos creando un observable vacio que se
        // llenara con los datos del error y eso es lo que regresaremos
        // mandando asi un countries.length === 0
        catchError( () => of([]))


        // Estos son los taps, podemos agregar instrucciones / efectos
        // extra que hara cuando el observable detecte un cambio
        // tap( countries => console.log(`Tap1`, countries)),
        // map( countries => []),
        // tap( countries => console.log(`Tap2`, countries)),
      );
  }

  searchCountry( term: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ term }`;
    return this.http.get<Country[]>( url )
      .pipe(
        catchError( () => of([]))
      );
  }
  searchRegion( term: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/region/${ term }`;
    return this.http.get<Country[]>( url )
      .pipe(
        catchError( () => of([]))
      );
  }

}
