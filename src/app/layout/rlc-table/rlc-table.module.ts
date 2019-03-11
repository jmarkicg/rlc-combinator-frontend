import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  MatFormFieldModule,
  MatTableModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule
} from "@angular/material";
import {RlcTableComponent} from "./rlc-table.component";
import {LayoutModule} from "../layout.module";
import {RlcEditModule} from "../rlc-edit/rlc-edit.module";

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    LayoutModule,
    CommonModule,
    MatDialogModule,
    RlcEditModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ],
  exports: [RlcTableComponent],
  declarations: [RlcTableComponent]
})
export class RlcTableModule { }