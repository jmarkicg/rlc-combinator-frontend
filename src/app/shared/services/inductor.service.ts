import {Injectable} from "@angular/core";
import {Observable} from "rxjs/index";
import {HttpClient, HttpParams} from "@angular/common/http";
import {endpoints} from "../endpoints";
import {Resistor} from "../model/resistor";
import {Capacitor} from "../model/capacitor";
import {map} from "rxjs/operators";
import {Inductor} from "../model/inductor";

@Injectable()
export class InductorService  {

  constructor(
    private httpClient: HttpClient){
  }

  getInductors(): Observable<Inductor[]> {
    return this.httpClient.get<Inductor[]>(endpoints().rlc.inductorsList);
  }

  saveOne(inductor: Inductor) {
    return this.httpClient.post<Inductor>(endpoints().rlc.inductorSave, inductor);
  }

  deleteOne(id: number) {
    return this.httpClient.delete<any>(endpoints().rlc.inductorDelete + '/' + id).pipe(map(data => data));
  }

}
