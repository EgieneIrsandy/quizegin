import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Profil', url: '/profil', icon: 'person' },
    { title: 'Mata Kuliah', url: '/matakuliah', icon: 'bookmarks' },
    { title: 'Jadwal Kuliah ', url: '/jadwalkuliah', icon: 'book' },
    { title: 'Nilai', url: '/nilai', icon: 'ribbon' },
    { title: 'Kartu Rencana Studi', url: '/krs', icon: 'card' },
    { title: 'Keuangan', url: '/keuangan', icon: 'cash' },
  ];
 
  constructor() {}
}
