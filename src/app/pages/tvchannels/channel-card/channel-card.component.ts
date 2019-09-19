import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-channel-card',
  templateUrl: './channel-card.component.html',
  styleUrls: ['./channel-card.component.scss'],
  host: {'class': 'col-lg-4 col-md-6 col-sm-12'},
})
export class ChannelCardComponent implements OnInit {

  @Input() logo: string;
  @Input() channel: any = null;
  @Input() id: string;
  constructor() { }

  ngOnInit() {
  }

}
