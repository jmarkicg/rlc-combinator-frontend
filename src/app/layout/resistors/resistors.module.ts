import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
;
import {FlexLayoutModule} from "@angular/flex-layout";
import {ResistorsComponent} from "./resistors.component";
import {ResistorsRoutingModule} from "./resistors-routing.module";

@NgModule({
  imports: [
    CommonModule,
    ResistorsRoutingModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ],
  declarations: [ResistorsComponent]
})
export class ResistorsModule { }
