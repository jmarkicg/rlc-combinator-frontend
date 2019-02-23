import {Injectable} from "@angular/core";
import {Observable} from "rxjs/index";
import {HttpClient, HttpParams} from "@angular/common/http";
import {endpoints} from "../endpoints";
import {Capacitor} from "../model/capacitor";

@Injectable()
export class CapacitorService  {

  constructor(
    private httpClient: HttpClient){
  }

  getCapacitors(): Observable<Capacitor[]> {
    return this.httpClient.get<Capacitor[]>(endpoints().rlc.capacitorsList);
  }

}
