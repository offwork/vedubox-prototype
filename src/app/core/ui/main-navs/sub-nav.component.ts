import { Component, Input } from '@angular/core';

@Component({
  selector: 'vedubox-sub-nav',
  template: `
    <ul class="sub-menu" [ngClass]="{ expanded: display }">
      <li *ngFor="let item of items">
        <a mat-button>
          <mat-icon aria-label="sub nav item icon">{{ item.icon }}</mat-icon>
          <span>{{ item.label }}</span>
        </a>
      </li>
    </ul>
  `,
  styles: [
    `
      ul {
        list-style: none;
        padding: 0 0 0 24px;
      }
      li {
        padding: 0;
        margin: 0;
      }
      a {
        width: 100%;
        text-align: left;
        color: white;

        font-weight: lighter;
      }
      .mat-icon {
        margin-right: 8px;
      }
      .sub-menu {
        display: none;
      }
      .expanded {
        display: block;
        background-color: rgb(35, 127, 128);
      }
    `
  ]
})
export class SubNavComponent {
  @Input() public items: any[];
  @Input() public display: boolean;
}
