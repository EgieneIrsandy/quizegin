import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'profil',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'matakuliah',
    loadChildren: () => import('./matakuliah/matakuliah.module').then( m => m.MatakuliahPageModule)
  },
  {
    path: 'jadwalkuliah',
    loadChildren: () => import('./jadwalkuliah/jadwalkuliah.module').then( m => m.JadwalkuliahPageModule)
  },
  {
    path: 'nilai',
    loadChildren: () => import('./nilai/nilai.module').then( m => m.NilaiPageModule)
  },
  {
    path: 'krs',
    loadChildren: () => import('./krs/krs.module').then( m => m.KrsPageModule)
  },
  {
    path: 'keuangan',
    loadChildren: () => import('./keuangan/keuangan.module').then( m => m.KeuanganPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
