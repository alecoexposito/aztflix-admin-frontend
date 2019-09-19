import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'ngx-render-link',
  templateUrl: './render-link.component.html',
  styleUrls: ['./render-link.component.scss'],
})
export class RenderLinkComponent implements OnInit {

  renderValue: string;

  @Input() value: string;
  @Input() rowData: any;
  constructor() { }

  ngOnInit() {
    this.renderValue = environment.apiUrl + '/uploads/videos/' + this.value;
  }


}
