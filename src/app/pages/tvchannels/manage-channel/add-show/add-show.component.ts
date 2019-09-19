import { Component, OnInit } from '@angular/core';
import {Channel, ChannelService, Show} from '../../../../@core/services/channel.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ngx-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.scss'],
})
export class AddShowComponent implements OnInit {

  id: string;
  model: Show = new Show();
  channel: Channel;
  fileData: File = null;

  constructor(private service: ChannelService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.model.chapters = [];
    this.id  = this.route.snapshot.params.id;
    this.service.getChannelById(this.id).subscribe((data: any) => {
      this.channel = data.data;
    });
  }

  onSubmit() {
    this.channel.shows.push(this.model);
    const id = this.channel._id;
    const formData = new FormData();
    formData.append('file', this.fileData);
    formData.append('model', JSON.stringify(this.model));
    this.service.addShow(id, formData).subscribe((data: any) => {
      const idShow = data.inserted._id;
      this.router.navigate(['pages/tvchannels/manage-channel', id, 'edit-show', idShow]);
    })
  }

  fileSelected(event: any) {
    this.fileData = <File>event.target.files[0];
    // this.preview();
  }
}
