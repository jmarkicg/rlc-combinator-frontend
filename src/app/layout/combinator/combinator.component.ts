import { Component, OnInit } from '@angular/core';
import {ElementEnum} from "../../shared/model/element-enum";
import {Capacitor} from "../../shared/model/capacitor";
import {Resistor} from "../../shared/model/resistor";
import {CombinatorModel} from "../../shared/model/combinator-model";
import {BaseElement} from "../../shared/model/base-element";

@Component({
  selector: 'app-combinator',
  templateUrl: './combinator.component.html',
  styleUrls: ['./combinator.component.scss']
})
export class CombinatorComponent implements OnInit {

  baseElement =  ElementEnum;

  types: string[];
  combModel: CombinatorModel;

  constructor() { }

  ngOnInit() {
    this.combModel.allowedErrorPercentage = 5;
    this.combModel.numGeneratedItems = 20;
  }


  private onSubmit() {

  }

}
