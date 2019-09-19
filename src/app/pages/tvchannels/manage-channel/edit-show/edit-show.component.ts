import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Channel, ChannelService, Show} from '../../../../@core/services/channel.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'ngx-edit-show',
  templateUrl: './edit-show.component.html',
  styleUrls: ['./edit-show.component.scss']
})
export class EditShowComponent implements OnInit {

  id: string;
  id_show: string;
  model: Show = new Show();
  channel: Channel;
  fileData: File = null;
  imagesUrl: String = environment.apiUrl + '/uploads/shows/';
  @ViewChild('imageInput', {static: true}) imageInputVar: ElementRef;
  constructor(private service: ChannelService, private route: ActivatedRoute,
              private http: HttpClient,
              private router: Router) { }

  ngOnInit() {
    this.id  = this.route.snapshot.params.id;
    this.id_show = this.route.snapshot.params.id_show;
    this.service.getShowByChannelAndId(this.id, this.id_show)
      .subscribe((data: any) => {
        this.model = data.show;
      })
  }

  fileSelected(event: any) {
    this.fileData = <File>event.target.files[0];
    // this.preview();
  }

  onSubmit() {
    if(this.imageInputVar.nativeElement.value !== '') {
      const formData = new FormData();
      formData.append('file', this.fileData);
      formData.append('model', JSON.stringify(this.model));
      this.service.updateShow(this.id, this.id_show, formData).subscribe((data: any) => {
        this.model = data.updated;
        this.imageInputVar.nativeElement.value = '';
      })
    } else {
        this.service.updateShow(this.id, this.id_show, {model: this.model, noFile: true}).subscribe((data: any) => {
          this.model = data.updated;
          this.imageInputVar.nativeElement.value = '';
        })
    }
  }

  onChapterUploaded($event) {
    this.model.chapters.push($event.chapter);
  }
}
