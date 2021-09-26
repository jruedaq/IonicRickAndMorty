import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpisodePageRoutingModule } from './episode-routing.module';

import { EpisodePage } from './episode.page';
import {LoadingComponentComponent} from "../loading-component/loading-component.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EpisodePageRoutingModule
  ],
  declarations: [EpisodePage, LoadingComponentComponent]
})
export class EpisodePageModule {}