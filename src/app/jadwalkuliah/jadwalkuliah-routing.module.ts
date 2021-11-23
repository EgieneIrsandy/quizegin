import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JadwalkuliahPage } from './jadwalkuliah.page';

const routes: Routes = [
  {
    path: '',
    component: JadwalkuliahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JadwalkuliahPageRoutingModule {}
