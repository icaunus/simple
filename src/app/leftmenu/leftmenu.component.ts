import { Component, OnInit } from '@angular/core';

import { LinkItem } from './link-item';
import { LinksService } from './links.service';

const _LINK_MAX:number = 8;
const _LINK_TITLE_PREFIX:string = "Item #";

@Component({
  selector: 'leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftMenuComponent implements OnInit {
  public links:LinksService;
  // public links:Array<string> = new Array<string>(_LINK_MAX);

  constructor() {
    this.links = new LinksService();

    for (let i:number = 0; i < _LINK_MAX; i++) {
      let newLink:string = _LINK_TITLE_PREFIX + i;
      this.links.add(newLink);
    }
  }

  ngOnInit() {
  }
}
