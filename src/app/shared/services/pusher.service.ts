import { Injectable } from '@angular/core';
import * as Pusher from 'pusher-js';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";

// this is here to discourage the instantianting of pusher any where its
// needed, better to reference it from one place
@Injectable()
export class PusherService {
  pusher: any;
  channel: any;
  constructor(private http: HttpClient) {
    this.pusher = new Pusher(environment.pusher.key, {
      cluster: environment.pusher.cluster,
      encrypted: true
    });
    this.channel = this.pusher.subscribe(environment.pusher.channel);
  }
}
