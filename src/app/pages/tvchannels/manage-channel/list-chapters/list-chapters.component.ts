import {Component, Input, OnInit} from '@angular/core';
import {ChannelService, Show} from '../../../../@core/services/channel.service';
import {environment} from '../../../../../environments/environment';
import {RenderLinkComponent} from '../render-link/render-link.component';

@Component({
  selector: 'ngx-list-chapters',
  templateUrl: './list-chapters.component.html',
  styleUrls: ['./list-chapters.component.scss']
})
export class ListChaptersComponent implements OnInit {

  @Input() show: any = new Show();
  @Input() idChannel: string;
  @Input() idShow: string;
  videoUrl: string = environment.apiUrl + '/uploads/videos/';
  settings = {
    noDataMessage: 'No hay elementos que mostrar',
    actions: {
      position: 'right',
      columnTitle: 'Acciones',
      edit: true,
      add: false,
      delete: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      // id: {
      //   title: 'ID',
      //   type: 'number',
      // },
      number: {
        title: 'Número',
        type: 'number',
        filter: true,
        sortDirection: 'asc',
      },
      name: {
        title: 'Nombre',
        type: 'string',
        filter: true,
      },
      title: {
        title: 'Título',
        type: 'string',
        filter: true,
      },
      path: {
        title: 'Video',
        type: 'custom',
        renderComponent: RenderLinkComponent,
        filter: false,
        editable: false,
      },
    },
  };

  constructor(private service: ChannelService) { }

  ngOnInit() {
  }

  confirmSave($event) {
    this.service.updateChapter($event.newData, this.idChannel, this.idShow).subscribe((data: any) => {
      $event.confirm.resolve();
    });
  }
  confirmDelete($event) {
    if(confirm('¿Seguro que desea eliminar el capítulo?'))
      this.service.deleteChapter(this.idChannel, this.idShow, $event.data._id).subscribe((data: any) => {
        $event.confirm.resolve();
      });
    else
      $event.confirm.reject();
  }
}
