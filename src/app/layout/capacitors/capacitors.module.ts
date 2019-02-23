import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from "@angular/flex-layout";
import {CapacitorsComponent} from "./capacitors.component";
import {CapacitorsRoutingModule} from "./capacitors-routing.module";
import {RlcTableComponent} from "../components/rlc-table/rlc-table.component";
import {MatFormFieldModule, MatTableModule, MatInputModule, MatIconModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    CapacitorsRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ],
  declarations: [CapacitorsComponent, RlcTableComponent]
})
export class CapacitorsModule { }
