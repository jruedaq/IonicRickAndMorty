import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterPageRoutingModule } from './character-routing.module';

import { CharacterPage } from './character.page';
import {LoadingComponentComponent} from "../loading-component/loading-component.component";
import {LocationCardComponent} from "../location-card/location-card.component";
import {EpisodeCardComponent} from "../episode-card/episode-card.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterPageRoutingModule
  ],
  declarations: [CharacterPage, LoadingComponentComponent, LocationCardComponent, EpisodeCardComponent]
})
export class CharacterPageModule {}
