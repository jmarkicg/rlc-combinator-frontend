import {Injectable} from "@angular/core";
import {Observable} from "rxjs/index";
import {HttpClient, HttpParams} from "@angular/common/http";
import {endpoints} from "../endpoints";
import {Capacitor} from "../model/capacitor";
import {map} from "rxjs/operators";
import {CombinatorModel} from "../model/combinator-model";
import {ElementEnum} from "../model/element-enum";

@Injectable()
export class CombinatorService  {

  constructor(
    private httpClient: HttpClient){
  }

  getCombinations(comb: CombinatorModel): Observable<any[]> {
    let url = endpoints().rlc.combinatorGenerate + '/' + comb.requestedValue
      + '/5/' + comb.allowedErrorPercentage  + '/' + ElementEnum[comb.type];
    return this.httpClient.get<any[]>(url);
  }

}
