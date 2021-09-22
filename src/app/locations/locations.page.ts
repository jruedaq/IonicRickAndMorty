import {Component, OnInit} from '@angular/core';
import {ApiService} from "../rest/api.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "../objects/location";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {

  elements: Location[] = [];
  actualPage: number;
  totalPages: number;
  n: number;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.actualPage = parseInt(this.activatedRoute.snapshot.paramMap.get('page'));
    this.api.getLocations().subscribe(r => {
      this.totalPages = r.info.pages;
      this.n = r.info.count;
      r.results.forEach(e => {
        this.elements.push(new Location(e))
      })
    })
  }
}
