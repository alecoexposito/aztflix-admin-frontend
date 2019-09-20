import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'ngx-render-link-ads',
  templateUrl: './render-link-ads.component.html',
  styleUrls: ['./render-link-ads.component.scss']
})
export class RenderLinkAdsComponent implements OnInit {

  renderValue: string;

  @Input() value: string;
  @Input() rowData: any;
  constructor() { }

  ngOnInit() {
    this.renderValue = environment.apiUrl + '/uploads/ads/' + this.value;
  }

}
