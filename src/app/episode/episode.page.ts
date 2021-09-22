import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../rest/api.service";
import {Episode} from "../objects/episode";

@Component({
  selector: 'app-episode',
  templateUrl: './episode.page.html',
  styleUrls: ['./episode.page.scss'],
})
export class EpisodePage implements OnInit {

  episode: Episode = null;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) {
  }

  ngOnInit() {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));

    this.api.getEpisode(id).subscribe(r => {
      this.episode = new Episode(r);
    });
  }

}
