import {Component} from '@angular/core';
import {Router, RouterEvent} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: 'Characters', url: '/characters/1', icon: 'people'},
    {title: 'Locations', url: '/locations/1', icon: 'location'},
    {title: 'Episodes', url: '/episodes/1', icon: 'tv'},
  ];

  selectedPath = "";

  constructor(private router: Router) {
    this.router.events.subscribe((e: RouterEvent) => {
      this.selectedPath = e.url;
    })
  }
}
