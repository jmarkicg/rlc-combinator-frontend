import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from "@angular/flex-layout";
import {ResistorsComponent} from "./resistors.component";
import {ResistorsRoutingModule} from "./resistors-routing.module";
import {RlcTableModule} from "../rlc-table/rlc-table.module";

@NgModule({
  imports: [
    CommonModule,
    ResistorsRoutingModule,
    RlcTableModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ],
  declarations: [ResistorsComponent]
})
export class ResistorsModule { }
