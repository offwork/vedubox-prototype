import { Component, OnInit, OnDestroy } from '@angular/core';
import { FakeNavService } from './fake-nav.service';
import { take, takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'vedubox-main-navs',
  templateUrl: './main-navs.component.html',
  styleUrls: ['./main-navs.component.scss']
})
export class MainNavsComponent implements OnInit, OnDestroy {
  public showSubmenu: boolean;
  public navIndex = 0;
  public navs: any[];

  private _subscription: Subject<boolean> = new Subject();

  constructor(public navService: FakeNavService, private _router: Router) {}

  ngOnInit() {
    this.navService
      .getNavs()
      .pipe(
        take(1),
        takeUntil(this._subscription)
      )
      .subscribe(nav => (this.navs = nav));
  }

  ngOnDestroy() {
    this._subscription.next(true);
    this._subscription.unsubscribe();
  }

  navItemClick($event) {
    this.navs[this.navIndex].toggle = false;
    this.navIndex = $event.index;
    this.navs[this.navIndex].toggle = true;

    if ($event.link !== '') {
      this._router.navigate([$event.link]);
    }
  }
}
