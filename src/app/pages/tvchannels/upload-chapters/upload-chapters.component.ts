import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {DropTargetOptions, FileItem, HttpClientUploadService, InputFileOptions, MineTypeEnum} from '@wkoza/ngx-upload';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'ngx-upload-chapters',
  templateUrl: './upload-chapters.component.html',
  styleUrls: ['./upload-chapters.component.scss'],
})
export class UploadChaptersComponent implements OnInit {

  @ViewChild('ourForm', {static: true}) ourForm;
  numbers: any = [];
  @Input() idChannel: any;
  @Input() idShow: any;

  @Output() uploadedChapter: EventEmitter<any> = new EventEmitter<any>();

  optionsInput: InputFileOptions = {
    multiple: true,
    accept: [MineTypeEnum.Video_Mp4],
    disableMultipart: false
  };

  optionsDrop: DropTargetOptions = {
    color: 'dropZoneColor',
    colorDrag: 'dropZoneColorDrag',
    colorDrop: 'dropZoneColorDrop',
    multiple: true,
    accept: [MineTypeEnum.Video_Mp4],
    disableMultipart: false
  };

  constructor(public uploader: HttpClientUploadService) { }

  ngOnInit() {
    this.uploader.queue = [];


    this.uploader.onCancel$.subscribe(
      (data: FileItem) => {
        console.log('file canceled: ' + data.file.name);

      });

    this.uploader.onDropError$.subscribe(
      (err) => {
        console.log('error during drop action: ', err);
      });

    this.uploader.onProgress$.subscribe(
      (data: any) => {
        console.log(data);
        console.log('upload file in progree: ', data.progress);

      });

    this.uploader.onSuccess$.subscribe(
      (data: any) => {
        console.log('upload file successful:', data);
        this.uploadedChapter.emit({chapter: data.body.chapter});

      }
    );

    this.uploader.onAddToQueue$.subscribe(
      () => {
        // this.numbers.push(this.numbers.length + 1);
        console.log(`reset of our form`);
        this.ourForm.reset();

      }
    );

    this.uploader.onError$.subscribe((data: any) => {
      console.log("error uploading: ",  data);
    });

    this.uploader.onBeforeUploadItem$.subscribe((item: FileItem) => {
      item.formData.set('idChannel', this.idChannel);
      item.formData.set('idShow', this.idShow);
    });
  }

  upload(item: FileItem) {
    item.upload({
      method: 'POST',
      url: environment.apiUrl + '/chapter-upload/',
    });
  }

  uploadAll() {
    this.uploader.uploadAll({
      method: 'POST',
      url: environment.apiUrl + '/chapter-upload/'
    });
  }


  makeThumbnail(item: FileItem) {
    const reader = new FileReader();
    // read the image file as a data URL.
    reader.readAsDataURL(item.file);

  }

  activeRemoveAllBtn(): boolean {
    return this.uploader.queue.some(item => (item.isReady || item.isCancel || item.isError));
  }

  activeUploadAllBtn(): boolean {
    return this.uploader.queue.some(item => (item.isReady));
  }

  activeCancelAllBtn(): boolean {
    return this.uploader.queue.some((item: FileItem) => item.uploadInProgress);
  }

}
