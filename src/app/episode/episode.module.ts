import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {EpisodePageRoutingModule} from './episode-routing.module';

import {EpisodePage} from './episode.page';
import {LoadingComponentComponent} from "../loading-component/loading-component.component";
import {CharacterCardComponent} from "../character-card/character-card.component";
import {EpisodeCardComponent} from "../episode-card/episode-card.component";
import {LocationCardComponent} from "../location-card/location-card.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EpisodePageRoutingModule
  ],
  exports: [
    LocationCardComponent
  ],
  declarations: [EpisodePage, LoadingComponentComponent, CharacterCardComponent]
})
export class EpisodePageModule {
}
