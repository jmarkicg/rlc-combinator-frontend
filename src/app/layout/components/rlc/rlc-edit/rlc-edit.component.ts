import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar, MatTableDataSource} from "@angular/material";
import {ElementEnum} from "../../../../shared/model/element-enum";
import {ActionsEnum} from "../../../../shared/model/actions-enum";
import {Resistor} from "../../../../shared/model/resistor";
import {Capacitor} from "../../../../shared/model/capacitor";
import {CapacitorService} from "../../../../shared/services/capacitor.service";
import {ResistorService} from "../../../../shared/services/resistor.service";
import {FormGroup} from "@angular/forms";
import {InductorService} from "../../../../shared/services/inductor.service";
import {Inductor} from "../../../../shared/model/inductor";
declare function require(path: string);

export interface DialogData {
  type: ElementEnum;
  element: any;
  action: ActionsEnum
}

@Component({
  selector: 'app-rlc-edit',
  templateUrl: './rlc-edit.component.html',
  styleUrls: ['./rlc-edit.component.scss'],
  providers: [CapacitorService, ResistorService, InductorService]
})
export class RlcEditComponent implements OnInit {

  form: FormGroup;

  title: string;
  saveButtonTitle: string;
  element: any;

  resistorType: ElementEnum = ElementEnum.Resistor;
  //inductorType: ElementEnum = ElementEnum.Inductor;
  capacitorType: ElementEnum = ElementEnum.Capacitor;

  cservice: CapacitorService;
  rservice: ResistorService;
  iservice: InductorService;

  unit: string;
  ohm: boolean = false;

  constructor(
    private snackBar: MatSnackBar,
    public capacitorService: CapacitorService,
    public resistorService: ResistorService,
    public inductorService: InductorService,
    public dialogRef: MatDialogRef<RlcEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.cservice = capacitorService;
      this.rservice = resistorService;
      this.iservice = inductorService;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    if (this.data.action == ActionsEnum.EDIT){
      this.title = 'Edit ';
      this.saveButtonTitle = 'Save';
    } else {
      this.title = 'Add ';
      this.saveButtonTitle = 'Create';
    }

    this.element = this.data.element;
    if (this.data.type == ElementEnum.Capacitor){
      this.title += ' capacitor';
      if (this.data.action == ActionsEnum.ADD){
        this.element = new Capacitor();
      }
      this.unit = "F";
    } else if(this.data.type == ElementEnum.Resistor){
      this.title += ' resistor';
      if (this.data.action == ActionsEnum.ADD){
        this.element = new Resistor();
      }
      this.ohm = true;
    } else if(this.data.type == ElementEnum.Inductor){
      this.title += ' inductor';
      if (this.data.action == ActionsEnum.ADD){
        this.element = new Inductor();
      }
      this.unit = "H";
    }
  }

  cancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.data.type == ElementEnum.Capacitor){
      this.cservice.saveOne(this.element).subscribe(
        (response: Capacitor) => {},
       err => this.handleError(),
        () => this.handleSucess());
    } else if (this.data.type == ElementEnum.Resistor){
      this.rservice.saveOne(this.element).subscribe(
        (response: Resistor) => {},
        err => this.handleError(),
        () => this.handleSucess());
    } else if (this.data.type == ElementEnum.Inductor){
      this.iservice.saveOne(this.element).subscribe(
        (response: Inductor) => {},
        err => this.handleError(),
        () => this.handleSucess());
    }
  }

  public handleSucess(){
    this.snackBar.open('Successfully saved.', 'SUCCESS', { duration: 2000, verticalPosition: 'top' });
    this.dialogRef.close();
  }

  public handleError(){
    this.snackBar.open('Error occurred!', 'ERROR', { duration: 2000, verticalPosition: 'top'});
  }

}
