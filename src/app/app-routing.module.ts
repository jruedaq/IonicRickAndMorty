import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'characters/:page',
        loadChildren: () => import('./characters/characters.module').then(m => m.CharactersPageModule)
      },
      {
        path: 'character/:id',
        loadChildren: () => import('./character/character.module').then(m => m.CharacterPageModule)
      },
      {
        path: 'locations/:page',
        loadChildren: () => import('./locations/locations.module').then(m => m.LocationsPageModule)
      },
      {
        path: 'location/:id',
        loadChildren: () => import('./location/location.module').then(m => m.LocationPageModule)
      },
      {
        path: 'episodes/:page',
        loadChildren: () => import('./episodes/episodes.module').then(m => m.EpisodesPageModule)
      },
      {
        path: 'episode/:id',
        loadChildren: () => import('./episode/episode.module').then(m => m.EpisodePageModule)
      },
      {
        path: '',
        redirectTo: 'characters/1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'characters/1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
