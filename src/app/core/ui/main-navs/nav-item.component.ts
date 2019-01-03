import {
  Component,
  Input,
  Output,
  EventEmitter,
  ContentChild,
  TemplateRef
} from '@angular/core';

@Component({
  selector: 'vedubox-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {
  @Output() toggled = new EventEmitter<NavItemComponent>();
  @Input() label: string;
  @Input() link: string;
  @Input() icon: string;
  @Input() toggle: boolean;
  @Input() index: number;

  @ContentChild('navSub') navSub: TemplateRef<any>;
}
