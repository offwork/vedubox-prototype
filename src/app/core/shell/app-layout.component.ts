import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vedubox-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {
  public opened: boolean = true;
  public isExpand: boolean = false;

  constructor() {}

  ngOnInit() {}
}
