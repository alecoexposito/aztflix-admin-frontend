import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {AdService} from '../../../@core/services/ad.service';
import {LocalDataSource} from 'ng2-smart-table';
import {RenderLinkAdsComponent} from './render-link-ads/render-link-ads.component';

@Component({
  selector: 'ngx-manage-ads',
  templateUrl: './manage-ads.component.html',
  styleUrls: ['./manage-ads.component.scss'],
})
export class ManageAdsComponent implements OnInit {

  ads: any = [];
  source: LocalDataSource = new LocalDataSource();
  settings = {
    // hideSubHeader: true,
    // mode: 'external',
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
      name: {
        title: 'Nombre',
        type: 'string',
        filter: true,
      },
      path: {
        title: 'Video',
        editable: false,
        type: 'custom',
        renderComponent: RenderLinkAdsComponent,
        filter: false,
      },
    },
  };


  constructor(private service: AdService) { }

  ngOnInit() {
    this.service.getAds().subscribe((data: any) => {
      this.ads = data.ads;
      this.source.load(this.ads);
    });
  }

  confirmSave($event) {
    this.service.updateAd($event.newData._id, $event.newData).subscribe((data: any) => {
      $event.confirm.resolve();
    });
  }
  confirmDelete($event) {
    if(confirm('¿Seguro que desea eliminar el anuncio?'))
      this.service.deleteAd($event.data._id).subscribe((data: any) => {
        $event.confirm.resolve();
      });
    else
      $event.confirm.reject();
  }

  onAdUploaded($event) {
    this.source.add($event.ad);
    this.source.refresh();
  }

}
