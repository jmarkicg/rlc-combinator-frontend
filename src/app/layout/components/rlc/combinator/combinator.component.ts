import { Component, OnInit } from '@angular/core';
import {ElementEnum} from "../../../../shared/model/element-enum";
import {CombinatorModel} from "../../../../shared/model/combinator-model";
import {PusherService} from "../../../../shared/services/pusher.service";
import {environment} from "../../../../../environments/environment";
import {CombinatorService} from "../../../../shared/services/combinator.service";
import {CombinationModel} from "../../../../shared/model/combination-model";
import {PusherModel} from "../../../../shared/model/pusher-model";

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

  unit: string = "";
  ohm: boolean = true;

  constructor(private pusherService: PusherService, private combinatorService: CombinatorService) { }

  ngOnInit() {
    this.combModel = new CombinatorModel();
    this.combModel.allowedErrorPercentage = 5;
    this.combModel.maxNumGeneratedItems = 20;
    this.combModel.minNumGeneratedItems = 1;
    this.combModel.requestedValue = 50;
    this.getEnumKeys();
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
    this.combinatorService.getCombinations(this.combModel).subscribe((response) => {
      this.subScribeToLogs(response);

    });
  }

  subScribeToLogs(threadId: number) {
    this.pusherService.channel.bind(environment.pusher.event + threadId, data => {
      let pusherModel: PusherModel = JSON.parse(data);
      if (pusherModel.logMessage){
        this.consoleLog = pusherModel.logMessage + "<br/>" + this.consoleLog
      } else {
        this.combinations = pusherModel.combinations;
        this.selected = 1;
        this.loading = false;
      }

    });
  }

  typeChanged(){
    if (this.combModel.type == 'Resistor' ){
      this.ohm = true;
    } else if (this.combModel.type == 'Inductor' ){
      this.unit = 'H';
      this.ohm = false;
    } else {
      this.unit = 'F';
      this.ohm = false;
    }
  }



}
