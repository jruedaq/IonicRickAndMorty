import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {CharactersPageRoutingModule} from './characters-routing.module';

import {CharactersPage} from './characters.page';
import {CharacterCardComponent} from "../character-card/character-card.component";
import {LoadingComponentComponent} from "../loading-component/loading-component.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharactersPageRoutingModule
  ],
  exports: [CharacterCardComponent, LoadingComponentComponent],
  declarations: [CharactersPage, CharacterCardComponent, LoadingComponentComponent]
})
export class CharactersPageModule {
}
