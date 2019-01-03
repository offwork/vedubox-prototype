import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  textColor: string;
}

@Component({
  selector: 'vedubox-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  tiles: Tile[] = [
    {
      text: 'Koleksiyonlarim',
      cols: 3,
      rows: 1,
      color: '#5195d2',
      textColor: '#FFF'
    },
    {
      text: 'Sinavlarim',
      cols: 1,
      rows: 2,
      color: '#f6a46c',
      textColor: '#FFF'
    },
    {
      text: 'Canli Ders',
      cols: 1,
      rows: 1,
      color: '#f86973',
      textColor: '#FFF'
    },
    { text: 'Kütüphane', cols: 2, rows: 1, color: '#76ccc8', textColor: '#FFF' }
  ];

  constructor() {}

  ngOnInit() {}
}
