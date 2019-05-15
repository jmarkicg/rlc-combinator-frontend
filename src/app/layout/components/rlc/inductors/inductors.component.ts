import {Component, OnInit} from '@angular/core';
import {ElementEnum} from "../../../../shared/model/element-enum";

@Component({
  selector: 'app-inductors',
  templateUrl: './inductors.component.html',
  styleUrls: ['./inductors.component.scss']
})
export class InductorsComponent implements OnInit {

  type: ElementEnum;

  constructor() { }

  ngOnInit() {
    this.type = ElementEnum.Inductor;
  }

}
