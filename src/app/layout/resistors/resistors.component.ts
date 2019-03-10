import {Component, OnInit} from '@angular/core';
import {ElementEnum} from "../../shared/model/element-enum";

@Component({
  selector: 'app-resistors',
  templateUrl: './resistors.component.html',
  styleUrls: ['./resistors.component.scss']
})
export class ResistorsComponent implements OnInit {

  type: ElementEnum;

  constructor() { }

  ngOnInit() {
    this.type = ElementEnum.Resistor;
  }

}
