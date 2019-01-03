import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vedubox-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() toggled = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  sidenavToggle() {
    //this.toggled()
  }
}
