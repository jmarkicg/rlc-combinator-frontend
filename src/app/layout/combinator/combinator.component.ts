import { Component, OnInit } from '@angular/core';
import {ElementEnum} from "../../shared/model/element-enum";
import {CombinatorModel} from "../../shared/model/combinator-model";
import {PusherService} from "../../shared/services/pusher.service";
import {environment} from "../../../environments/environment";
import {CombinatorService} from "../../shared/services/combinator.service";
import {CombinationModel} from "../../shared/model/combination-model";

@Component({
  selector: 'app-combinator',
  templateUrl: './combinator.component.html',
  styleUrls: ['./combinator.component.scss'],
  providers: [PusherService, CombinatorService]
})
export class CombinatorComponent implements OnInit {

  baseElement =  ElementEnum;

  types: string[];
  combModel: CombinatorModel;

  consoleLog: string = "";
  combinations: CombinationModel[] ;

  submitted: boolean = false;
  loading: boolean = false;
  selected: number = 0;

  constructor(private pusherService: PusherService, private combinatorService: CombinatorService) { }

  ngOnInit() {
    this.combModel = new CombinatorModel();
    this.combModel.allowedErrorPercentage = 5;
    this.combModel.numGeneratedItems = 20;
    this.combModel.requestedValue = 50;
    this.getEnumKeys();
    this.subScribeToLogs();
  }

  getEnumKeys(){
    this.types = [];
    for (var enumMember in this.baseElement) {
      if(this.combModel.type == null){
        this.combModel.type = enumMember;
      }
      this.types.push(enumMember);
    }
  }
  onSubmit(){
    this.submitted = true;
    this.loading = true;
    this.selected = 0;
    this.consoleLog ="";
    this.combinatorService.getCombinations(this.combModel).subscribe((response: CombinationModel[]) => {
      this.combinations = response;
      this.selected = 1;
      this.loading = false;
    });
  }

  subScribeToLogs() {
    this.pusherService.channel.bind(environment.pusher.event, data => {;
      this.consoleLog = data + "<br/>" + this.consoleLog
    });
  }



}
