import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvchannelsRoutingModule } from './tvchannels-routing.module';
import { ListTvchannelsComponent } from './list-tvchannels/list-tvchannels.component';
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbProgressBarModule,
  NbTabsetModule
} from '@nebular/theme';
import { ChannelCardComponent } from './channel-card/channel-card.component';
import { ManageChannelComponent } from './manage-channel/manage-channel.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { AddShowComponent } from './manage-channel/add-show/add-show.component';
import { UploadChaptersComponent } from './upload-chapters/upload-chapters.component';
import {NgxUploadModule} from '@wkoza/ngx-upload';
import {FormsModule} from '@angular/forms';
import { EditShowComponent } from './manage-channel/edit-show/edit-show.component';
import { ListChaptersComponent } from './manage-channel/list-chapters/list-chapters.component';
import { RenderLinkComponent } from './manage-channel/render-link/render-link.component';
import { ManageAdsComponent } from './manage-ads/manage-ads.component';
import { UploadAdsComponent } from './upload-ads/upload-ads.component';
import { ListAdsComponent } from './manage-ads/list-ads/list-ads.component';
import { RenderLinkAdsComponent } from './manage-ads/render-link-ads/render-link-ads.component';



@NgModule({
  declarations: [ListTvchannelsComponent, ChannelCardComponent,
    ManageChannelComponent, AddShowComponent, UploadChaptersComponent,
    EditShowComponent, ListChaptersComponent, RenderLinkComponent, ManageAdsComponent, UploadAdsComponent, ListAdsComponent, RenderLinkAdsComponent],
  imports: [
    CommonModule,
    TvchannelsRoutingModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule,
    Ng2SmartTableModule,
    NgxUploadModule,
    FormsModule,
    NbProgressBarModule,
    NbTabsetModule,
  ],
  entryComponents: [
    RenderLinkComponent,
    RenderLinkAdsComponent,
  ]
})
export class TvchannelsModule { }
