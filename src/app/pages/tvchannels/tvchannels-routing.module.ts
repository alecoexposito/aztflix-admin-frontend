import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListTvchannelsComponent} from './list-tvchannels/list-tvchannels.component';
import {ManageChannelComponent} from './manage-channel/manage-channel.component';
import {AddShowComponent} from './manage-channel/add-show/add-show.component';
import {EditShowComponent} from "./manage-channel/edit-show/edit-show.component";

const routes: Routes = [{
  path: 'list-tvchannels',
  component: ListTvchannelsComponent,
}, {
  path: 'manage-channel/:id',
  component: ManageChannelComponent,
}, {
  path: 'manage-channel/:id/add-show',
  component: AddShowComponent,
}, {
  path: 'manage-channel/:id/edit-show/:id_show',
  component: EditShowComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvchannelsRoutingModule { }
