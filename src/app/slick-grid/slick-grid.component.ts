import { Component, OnInit } from '@angular/core';
import { GridOption } from 'angular-slickgrid';
//import { Coulmn  } from './../modules/angular-slickgrid';

@Component({
  selector: 'app-slick-grid',
  templateUrl: './slick-grid.component.html',
  styleUrls: ['./slick-grid.component.scss']
})
export class SlickGridComponent implements OnInit {
  columnDefinitions1: Array<any> = [];  
  gridOptions1!: GridOption|any;  
  dataset1!: any[];
  constructor() { }

  ngOnInit() {
    this.columnDefinitions1 = [
      { id: 'title', name: 'Title', field: 'title', sortable: true },
      { id: 'duration', name: 'Duration (days)', field: 'duration', sortable: true },
      { id: '%', name: '% Complete', field: 'percentComplete', sortable: true },
      //{ id: 'start', name: 'Start', field: 'start', formatter: Formatters.dateIso },
      //{ id: 'finish', name: 'Finish', field: 'finish', formatter: Formatters.dateIso },
      { id: 'effort-driven', name: 'Effort Driven', field: 'effortDriven', sortable: true }
    ];
    this.gridOptions1 = {
      enableAutoResize: false,
      enableSorting: true,
      gridHeight: 225,
      gridWidth: 800,
    };
  }

  mockData(count: number) {
    // mock a dataset
    const mockDataset = [];
    for (let i = 0; i < count; i++) {
      const randomYear = 2000 + Math.floor(Math.random() * 10);
      const randomMonth = Math.floor(Math.random() * 11);
      const randomDay = Math.floor((Math.random() * 29));
      const randomPercent = Math.round(Math.random() * 100);

      mockDataset[i] = {
        id: i,
        title: 'Task ' + i,
        duration: Math.round(Math.random() * 100) + '',
        percentComplete: randomPercent,
        start: new Date(randomYear, randomMonth + 1, randomDay),
        finish: new Date(randomYear + 1, randomMonth + 1, randomDay),
        effortDriven: (i % 5 === 0)
      };
    }

    return mockDataset;
  }

}