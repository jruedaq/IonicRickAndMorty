import { Component, OnInit } from '@angular/core';
import {Episode} from "../objects/episode";
import {Location} from "../objects/location";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../rest/api.service";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {

  elements: Episode[] = [];
  actualPage: number;
  totalPages: number;
  n: number;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.actualPage = parseInt(this.activatedRoute.snapshot.paramMap.get('page'));
    this.api.getEpisodes().subscribe(r => {
      this.totalPages = r.info.pages;
      this.n = r.info.count;
      r.results.forEach(e => {
        this.elements.push(new Episode(e))
      })
    })
  }
}
