import {Component, OnInit} from '@angular/core';
import {ElementEnum} from "../../../../shared/model/element-enum";

@Component({
  selector: 'app-capacitors',
  templateUrl: './capacitors.component.html',
  styleUrls: ['./capacitors.component.scss']
})
export class CapacitorsComponent implements OnInit {

  type: ElementEnum;

  constructor() { }

  ngOnInit() {
    this.type = ElementEnum.Capacitor;
  }

}
