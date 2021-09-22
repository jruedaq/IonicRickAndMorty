import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationsPageRoutingModule } from './locations-routing.module';

import { LocationsPage } from './locations.page';
import {LocationCardComponent} from "../location-card/location-card.component";
import {PagerComponent} from "../pager/pager.component";
import {LoadingComponentComponent} from "../loading-component/loading-component.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationsPageRoutingModule
  ],
  declarations: [LocationsPage, LocationCardComponent, PagerComponent, LoadingComponentComponent]
})
export class LocationsPageModule {}
