import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'manual',
        loadChildren: () => import('../../@features/scan/pages/manual/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'scan',
        loadChildren: () => import('../../@features/scan/pages/camera/camera.module').then(m => m.CameraPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../../@features/profile/pages/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/scan',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/scan',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
