import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AutocompleteSimpleExample {
  myControl = new FormControl('');
  options: string[] = ['Schokolade', 'Bier', 'Softdrinks', 'Wasser', 'Obst', 'Gemüse', 'ToGo', 'Frühstück',
   'Feinkost', 'Konserven', 'Gewürze', 'Fleisch', 'Milchprodukte', 'Tiefkühlscahen', 'Haushaltsgegenstaende', 'Teigwaren', 'Backsachen', 'Chips' ];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
