import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CameraPage } from './camera.page';
import { ExploreContainerComponentModule } from '../../../../explore-container/explore-container.module';

import { CameraRoutingModule } from './camera-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CameraRoutingModule
  ],
  declarations: [CameraPage]
})
export class CameraPageModule {}
