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

  elements: Character[] = [];
  actualPage: number;
  totalPages: number;
  n: number;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.actualPage = parseInt(this.activatedRoute.snapshot.paramMap.get('page'));

    this.api.getCharacters(this.actualPage).subscribe(r => {
      this.totalPages = r.info.pages;
      this.n = r.info.count;
      r.results.forEach(e => {
        this.elements.push(new Character(e));
      });
    })
  }

}
