import { Injectable } from '@angular/core';

@Injectable()
export class ItemsService {
  private items:string[];

  constructor() {
    this.items = ['Alpha', 'Beta', 'Delta', 'Gamma'];
  }
}
