import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../rest/api.service";
import {Episode} from "../objects/episode";
import {Character} from "../objects/character";

@Component({
  selector: 'app-episode',
  templateUrl: './episode.page.html',
  styleUrls: ['./episode.page.scss'],
})
export class EpisodePage implements OnInit {

  episode: Episode = null;
  characters: Character[] = [];

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) {
  }

  ngOnInit() {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));

    this.api.getEpisode(id).subscribe(r => {
      this.episode = new Episode(r);
      this.getCharacters();
    });
  }

  getCharacters(): void {
    for (const character of this.episode.characters) {
      const characterId = parseInt(this.api.cleanUrl(character));
      this.api.getCharacter(characterId).subscribe(r => {
        this.characters.push(new Character(r));
      })
    }
  }
}
