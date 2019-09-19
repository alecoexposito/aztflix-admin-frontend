import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../../../@core/services/channel.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LocalDataSource} from 'ng2-smart-table';
import {DomSanitizer} from '@angular/platform-browser';
import {environment} from '../../../../environments/environment';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'ngx-manage-channel',
  templateUrl: './manage-channel.component.html',
  styleUrls: ['./manage-channel.component.scss'],
})
export class ManageChannelComponent implements OnInit {

  channel: any = [];
  source: LocalDataSource = new LocalDataSource();
  id: string;

  constructor(private channelService: ChannelService,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer, private http: HttpClient,
              private router: Router) { }

  settings = {
    hideSubHeader: true,
    // mode: 'external',
    actions: {
      position: 'right',
      columnTitle: 'Acciones',
      edit: false,
      add: false,
      delete: false,
      noDataMessage: 'No hay elementos que mostrar',
      custom: [
        {
          name: 'edit',
          title: '<i class="nb-edit"></i>',
        },
        {
          name: 'delete',
          title: '<i class="nb-trash"></i>',
        }
      ]
    },
    filter: {
      inputClass: 'aaa',
    },
    // add: {
    //   addButtonContent: '<i class="nb-plus"></i>',
    //   createButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    // edit: {
    //   editButtonContent: '<i class="nb-edit"></i>',
    //   saveButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    // delete: {
    //   deleteButtonContent: '<i class="nb-trash"></i>',
    //   // confirmDelete: true,
    // },
    columns: {
      // id: {
      //   title: 'ID',
      //   type: 'number',
      // },
      image: {
        title: 'Imagen',
        type: 'html',
        filter: false,
      },
      name: {
        title: 'Nombre',
        type: 'string',
        filter: false,
      },
      description: {
        title: 'Descripción',
        type: 'string',
        filter: false,
      },
      chapters: {
        title: 'Total de Capitulos',
        type: 'number',
        filter: false,
      },
    },
  };

  ngOnInit() {
    this.id  = this.route.snapshot.params.id;
    this.channelService.getChannelById(this.id).subscribe((data: any) => {
      this.channel = data.data;
      var tableSource: any = [];
      for (var i = 0; i < this.channel.shows.length; i++) {
        let show = this.channel.shows[i];
        let img = '<img style="width: 200px;" src="' + environment.apiUrl + '/uploads/shows/' +
          show.image + '" />';
        let imgFinal = this.sanitizer.bypassSecurityTrustHtml(img);
        tableSource.push({
          _id: show._id,
          image: imgFinal,
          name: show.name,
          description: show.description,
          chapters: show.chapters.length,
        });
      }
      this.source.load(tableSource);
    });
  }

  onDelete(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.channelService.deleteShow(this.id, event.data._id)
        .subscribe((data: any) => {
        this.source.remove(event.data);
      });
    }
  }

  onSearch(query: string = ' ') {
    if(query !== '') {
      this.source.setFilter([
        // fields we want to include in the search
        {
          field: 'name',
          search: query
        },
        {
          field: 'description',
          search: query
        },
      ], false);
    } else {

    }
  }

  onCustom(event) {
    console.log("en el custom jee");
    const idShow = event.data._id;
    if(event.action === 'edit') {
      this.router.navigate(['pages/tvchannels/manage-channel', this.id, 'edit-show', idShow]);
    } else if(event.action === 'delete') {
      this.onDelete(event);
    }
  }


}
