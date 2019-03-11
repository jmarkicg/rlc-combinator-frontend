import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  MatFormFieldModule,
  MatTableModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule, MatSortModule
} from "@angular/material";
import {RlcTableComponent} from "./rlc-table.component";
import {LayoutModule} from "../layout.module";
import {RlcEditModule} from "../rlc-edit/rlc-edit.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

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
    MatSortModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ],
  exports: [RlcTableComponent],
  declarations: [RlcTableComponent]
})
export class RlcTableModule { }
