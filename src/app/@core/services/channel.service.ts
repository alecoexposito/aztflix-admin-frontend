import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

export class Chapter {
  number: number;
  name: string;
  title: string;
  path: string;
  image: string;
}

export class Show {
  name: string;
  description: string;
  image: string;
  chapters: Chapter[];
}

export class Channel {
  _id: string;
  name: string;
  logo: string;
  shows: Show[];
}


@Injectable({
  providedIn: 'root',
})
export class ChannelService {
  baseUrl: String = environment.apiUrl;
  channels: any = null;
  constructor(private http: HttpClient) {
    this.loadChannels();
  }

  getChannels(): Observable<Object> {
    return this.http.get(this.baseUrl + '/channels/all');
  }

  loadChannels() {
    this.http.get(this.baseUrl + '/channels/all').subscribe((data) => {
      this.channels = data;
    });
  }

  getChannelByIndex(index): Channel {
    return this.channels[index];
  }

  getChannelById(id) {
    return this.http.get(this.baseUrl + '/channels/' + id);
  }

  deleteShow(idChannel, idShow) {
    return this.http.delete(environment.apiUrl + '/channels/' + idChannel + '/shows/' + idShow);
  }

  getShowByChannelAndId(id: any, idShow: string) {
    return this.http.get(this.baseUrl + '/channels/' + id + '/shows/' + idShow);
  }

  addShow(id: string, formData: FormData) {
    return this.http.post(environment.apiUrl + '/channels/' + id + '/shows', formData);
  }

  updateShow(id: string, id_show: string, data: any) {
    return this.http.patch(environment.apiUrl + '/channels/' + id + '/shows/' + id_show, data);
  }

  updateChapter(data: any, id, id_show) {
    return this.http.patch(environment.apiUrl + '/channels/' + id +
      '/shows/' + id_show + '/chapters/' + data._id, {data: data});
  }
  deleteChapter(id, id_show, id_chapter) {
    return this.http.delete(environment.apiUrl + '/channels/' + id +
      '/shows/' + id_show + '/chapters/' + id_chapter);
  }
}
