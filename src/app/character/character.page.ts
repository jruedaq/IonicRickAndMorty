import {Component, OnInit} from '@angular/core';
import {Character} from "../objects/character";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../rest/api.service";
import {Episode} from "../objects/episode";

@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
})
export class CharacterPage implements OnInit {

  character: Character = null;
  episodes: Episode[] = [];

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) {
  }

  ngOnInit() {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

    this.api.getCharacter(id).subscribe(r => {
      this.character = new Character(r);
      this.getLocations();
      this.getEpisodes();
    });
  }

  getLocations(): void {

  }

  getEpisodes(): void {
    for (const episode of this.character.episodes) {
      const episodeId = parseInt(this.api.cleanUrl(episode));
      this.api.getEpisode(episodeId).subscribe(r => {
        this.episodes.push(new Episode(r));
      })
    }
  }
}
