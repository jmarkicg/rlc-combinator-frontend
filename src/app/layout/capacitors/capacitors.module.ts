import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from "@angular/flex-layout";
import {CapacitorsComponent} from "./capacitors.component";
import {CapacitorsRoutingModule} from "./capacitors-routing.module";
import {RlcTableComponent} from "../rlc-table/rlc-table.component";
import {RlcTableModule} from "../rlc-table/rlc-table.module";

@NgModule({
  imports: [
    CommonModule,
    CapacitorsRoutingModule,
    RlcTableModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ],
  declarations: [CapacitorsComponent]
})
export class CapacitorsModule { }
