import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftMenuComponent implements OnInit {
  private links:string[] = new Array();

  constructor() {
    let _ITEM_COUNT:number = 8;
    let _ITEM_PREFIX:string = "Link #";
    let i:number = 0;

    for (; i < _ITEM_COUNT; i++) {
      this.links[i] = _ITEM_PREFIX + i;
    }
  }

  ngOnInit() {
  }
}
