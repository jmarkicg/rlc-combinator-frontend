import {Injectable} from "@angular/core";
import {Observable} from "rxjs/index";
import {HttpClient, HttpParams} from "@angular/common/http";
import {endpoints} from "../endpoints";
import {Capacitor} from "../model/capacitor";
import {map} from "rxjs/operators";

@Injectable()
export class CapacitorService  {

  constructor(
    private httpClient: HttpClient){
  }

  getCapacitors(): Observable<Capacitor[]> {
    return this.httpClient.get<Capacitor[]>(endpoints().rlc.capacitorsList);
  }

  saveOne(capacitor: Capacitor) {
    return this.httpClient.post<Capacitor>(endpoints().rlc.capacitorSave, capacitor);
  }

  deleteOne(_id: string) {
    return this.httpClient.delete<any>(endpoints().rlc.capacitorDelete + '/' + _id).pipe(map(data => data));
  }

}
