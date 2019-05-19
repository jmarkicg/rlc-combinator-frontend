import { Component, OnInit, Inject, EventEmitter} from '@angular/core';
import {DialogData} from "../../rlc/rlc-edit/rlc-edit.component";
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from "@angular/material"
import {BaseElement} from "../../../../shared/model/base-element";

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent implements OnInit {

  title: string = "Delete confirm action";
  deleteMessage: string = "Are you sure you want to delete";
  deleteButtonTitle: string = "Delete";
  cancelButtonTitle: string = "Cancel";

  onSubmitEvent = new EventEmitter();

  element: BaseElement;

  constructor(
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DialogConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
 }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.element = this.data.element;
    this.deleteMessage = this.deleteMessage + " " + this.element.type + "?";
  }

  cancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.onSubmitEvent.emit(this.element);
    this.dialogRef.close();
  }
}
