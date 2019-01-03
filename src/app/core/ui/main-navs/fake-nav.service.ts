import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeNavService {
  private navs: any[] = [
    {
      index: 0,
      toggle: false,
      icon: 'home',
      label: 'Ana Sayfa',
      path: '/',
      subnavs: []
    },
    {
      index: 1,
      toggle: false,
      icon: 'person_outline',
      label: 'Profilim',
      path: '/profile',
      subnavs: []
    },
    {
      index: 2,
      toggle: false,
      icon: 'book',
      label: 'Egitimlerim',
      path: '/education',
      subnavs: [
        {
          index: 0,
          toggle: false,
          icon: 'layers',
          label: 'Koleksiyonlarim',
          path: ''
        },
        {
          index: 1,
          toggle: false,
          icon: 'create',
          label: 'Sinavlarim',
          path: ''
        },
        {
          index: 2,
          toggle: false,
          icon: 'contacts',
          label: 'Canli Ders',
          path: ''
        },
        {
          index: 3,
          toggle: false,
          icon: 'library_books',
          label: 'Kütüphane',
          path: ''
        }
      ]
    },
    {
      index: 3,
      toggle: false,
      icon: 'apps',
      label: 'Katalog',
      path: '',
      subnavs: []
    },
    {
      index: 4,
      toggle: false,
      icon: 'calendar_today',
      label: 'Takvim',
      path: '',
      subnavs: []
    }
  ];

  getNavs() {
    return of(this.navs);
  }
}
