import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpisodesPageRoutingModule } from './episodes-routing.module';

import { EpisodesPage } from './episodes.page';
import {EpisodeCardComponent} from "../episode-card/episode-card.component";
import {LoadingComponentComponent} from "../loading-component/loading-component.component";
import {PagerComponent} from "../pager/pager.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EpisodesPageRoutingModule
    ],
    exports: [
        EpisodeCardComponent
    ],
    declarations: [EpisodesPage, EpisodeCardComponent, LoadingComponentComponent, PagerComponent]
})
export class EpisodesPageModule {}
