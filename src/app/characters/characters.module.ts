import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {CharactersPageRoutingModule} from './characters-routing.module';

import {CharactersPage} from './characters.page';
import {CharacterCardComponent} from "../character-card/character-card.component";
import {LoadingComponentComponent} from "../loading-component/loading-component.component";
import {PagerComponent} from "../pager/pager.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharactersPageRoutingModule
  ],
  exports: [CharacterCardComponent, LoadingComponentComponent, PagerComponent],
  declarations: [CharactersPage, CharacterCardComponent, LoadingComponentComponent, PagerComponent]
})
export class CharactersPageModule {
}
