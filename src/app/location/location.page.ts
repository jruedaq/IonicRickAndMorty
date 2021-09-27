import {Component, OnInit} from '@angular/core';
import {Location} from "../objects/location";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../rest/api.service";
import {Character} from "../objects/character";

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  location: Location = null;
  characters: Character[] = [];

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) {
  }

  ngOnInit() {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

    this.api.getLocation(id).subscribe(r => {
      this.location = new Location(r);
      this.getCharacters();
    })
  }

  getCharacters(): void {
    for (const resident of this.location.residents) {
      const characterId = parseInt(this.api.cleanUrl(resident));
      this.api.getCharacter(characterId).subscribe(r => {
        this.characters.push(new Character(r));
      })
    }
  }
}
