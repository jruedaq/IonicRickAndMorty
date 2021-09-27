import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationPageRoutingModule } from './location-routing.module';

import { LocationPage } from './location.page';
import {LoadingComponentComponent} from "../loading-component/loading-component.component";
import {EpisodeCardComponent} from "../episode-card/episode-card.component";
import {CharacterCardComponent} from "../character-card/character-card.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationPageRoutingModule
  ],
  declarations: [LocationPage, LoadingComponentComponent, EpisodeCardComponent, CharacterCardComponent]
})
export class LocationPageModule {}
