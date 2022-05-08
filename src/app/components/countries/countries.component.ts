import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  public data: any;

  constructor(private _service: CountriesService) { }

  ngOnInit(): void {
    this._service.getContries().subscribe(response=>{
      this.data=response;
    });
  }

}
