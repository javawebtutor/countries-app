import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private _httpClient: HttpClient) { }

  public getContries(): any{
    return this._httpClient.get("https://restcountries.com/v2/all");
  }
}
