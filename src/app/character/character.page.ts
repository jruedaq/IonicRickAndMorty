import {Component, OnInit} from '@angular/core';
import {Character} from "../objects/character";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../rest/api.service";
import {Episode} from "../objects/episode";
import {Location} from "../objects/location";

@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
})
export class CharacterPage implements OnInit {

  character: Character = null;
  episodes: Episode[] = [];
  originLocation: Location = null;
  knownLocation: Location = null;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) {
  }

  ngOnInit() {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

    this.api.getCharacter(id).subscribe(r => {
      this.character = new Character(r);
      this.getOriginLocation();
      this.getKnownLocation();
      this.getEpisodes();
    });
  }

  getOriginLocation(): void {
    const locationId = parseInt(this.api.cleanUrl(this.character.origin['url']));
    if (!isNaN(locationId)) {
      this.api.getLocation(locationId).subscribe(r => {
        this.originLocation = new Location(r);
      });
    } else {
      this.originLocation = new Location({
        id: 0,
        name: "Unknown",
        type: "Unknown",
        dimension: "Unknown",
        residents: "Unknown"
      })
    }
  }

  getKnownLocation(): void {
    const locationId = parseInt(this.api.cleanUrl(this.character.location['url']));
    if (!isNaN(locationId)) {
      this.api.getLocation(locationId).subscribe(r => {
        this.knownLocation = new Location(r);
      });
    } else {
      this.knownLocation = new Location({
        id: 0,
        name: "Unknown",
        type: "Unknown",
        dimension: "Unknown",
        residents: "Unknown"
      })
    }
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
