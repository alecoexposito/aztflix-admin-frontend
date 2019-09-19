import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ChannelService} from '../../../@core/services/channel.service';

@Component({
  selector: 'ngx-list-tvchannels',
  templateUrl: './list-tvchannels.component.html',
  styleUrls: ['./list-tvchannels.component.scss'],
})
export class ListTvchannelsComponent implements OnInit {

  channels: any = [];
  constructor(private sanitizer: DomSanitizer, private channelService: ChannelService) { }

  ngOnInit() {
    this.channelService.getChannels().subscribe((data: {}) => {
      this.channels = data;
    });
  }
  getBackgroundImage(image) {
    return this.sanitizer.bypassSecurityTrustStyle('url(\'/assets/images/channel-logos/' + image + '\')');
  }
}
