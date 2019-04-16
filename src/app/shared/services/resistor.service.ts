import {Injectable} from "@angular/core";
import {Observable} from "rxjs/index";
import {HttpClient, HttpParams} from "@angular/common/http";
import {endpoints} from "../endpoints";
import {Resistor} from "../model/resistor";
import {Capacitor} from "../model/capacitor";
import {map} from "rxjs/operators";

@Injectable()
export class ResistorService  {

  constructor(
    private httpClient: HttpClient){
  }

  getResistors(): Observable<Resistor[]> {
    return this.httpClient.get<Resistor[]>(endpoints().rlc.resistorsList);
  }

  saveOne(resistor: Resistor) {
    return this.httpClient.post<Resistor>(endpoints().rlc.resistorSave, resistor);
  }

  deleteOne(id: number) {
    return this.httpClient.delete<any>(endpoints().rlc.resistorDelete + '/' + id).pipe(map(data => data));
  }

}
