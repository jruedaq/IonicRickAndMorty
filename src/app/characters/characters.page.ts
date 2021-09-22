import {Component, OnInit} from '@angular/core';
import {ApiService} from "../rest/api.service";
import {ActivatedRoute} from "@angular/router";
import {Character} from "../objects/character";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  elements = [];

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const page = this.activatedRoute.snapshot.paramMap.get('page');

    this.api.getCharacters(page).subscribe(r => {
      r.results.forEach(e => {
        this.elements.push(new Character(e))
      });
    })
  }

}
