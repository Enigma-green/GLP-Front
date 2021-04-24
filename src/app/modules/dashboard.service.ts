import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return [{
      name: 'P-2',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'P-5',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'P-13',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'P-20',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
      name: 'Outros',
      data: [2, 2, 2, 6, 13, 30, 46]
    }];
  }

  cards() {
    return [71, 78, 39, 66];
  }

  pieChart() {
    return [{
      name: 'P-2 vazio',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'P-5 VAZIO',
      y: 11.84
    }, {
      name: 'P-13 VAZIO',
      y: 10.85
    }, {
      name: 'P-20 VAZIO',
      y: 4.67
    }, {
      name: 'GALÃO DE AGUA',
      y: 4.18
    }, {
      name: 'Abastecer',
      y: 1.64
    }, {
      name: 'Nitrogeio',
      y: 1.6
    }, {
      name: 'F9',
      y: 1.2
    }, {
      name: 'Other',
      y: 2.61
    }];
  }
}
