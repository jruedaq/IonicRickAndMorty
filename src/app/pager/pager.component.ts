import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss'],
})
export class PagerComponent implements OnInit {

  @Input() totalPages: number;
  @Input() actualPage: number;
  @Input() sourceUrl: string;

  constructor() {
  }

  ngOnInit() {
    this.totalPages = this.totalPages ?? 0;
  }
}
