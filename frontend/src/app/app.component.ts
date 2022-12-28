import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AutocompleteSimpleExample implements OnInit{

  constructor(private http: HttpClient) { }

  serverUrl = 'http://localhost:3000/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
  myControl = new FormGroup({
    search: new FormControl(''),
  })

  /*
  myControl = new FormControl('');
  options: string[] = ['Schokolade', 'Bier', 'Softdrinks', 'Wasser', 'Obst', 'Gemüse', 'ToGo', 'Frühstück',
   'Feinkost', 'Konserven', 'Gewürze', 'Fleisch', 'Milchprodukte', 'Tiefkühlscahen', 'Haushaltsgegenstaende', 'Teigwaren', 'Backsachen', 'Chips' ];
  filteredOptions!: Observable<string[]>;
*/
  
  ngOnInit(): void{
    /*
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    */
  }
  
  /*
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  */

  search() {
    const searchData = {
      product: this.myControl.value.search
    };
    
    const req = this.http.post<{message: any}>(this.serverUrl + "products", searchData, this.httpOptions).subscribe(
      (responseData) => {
        console.log(responseData.message);
    }, (error) => {
      console.log('Error: ' + error.message);
    });
  }
  
}
