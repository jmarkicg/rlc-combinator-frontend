import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CapacitorService} from "../../shared/services/capacitor.service";
import {Capacitor} from "../../shared/model/capacitor";
import {ElementEnum} from "../../shared/model/element-enum";
import {RlcEditComponent} from "../rlc-edit/rlc-edit.component";
import {MatDialog, MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatSort} from '@angular/material';
import {ActionsEnum} from "../../shared/model/actions-enum";
import {ResistorService} from "../../shared/services/resistor.service";
import {Resistor} from "../../shared/model/resistor";
import {BaseElement} from "../../shared/model/base-element";

@Component({
  selector: 'app-rlc-table',
  templateUrl: './rlc-table.component.html',
  styleUrls: ['./rlc-table.component.scss'],
  providers: [CapacitorService, ResistorService]
})
export class RlcTableComponent implements OnInit {

  @Input() type: ElementEnum;

  @ViewChild(MatSort) sort: MatSort;

  animal: string;
  name: string;
  addAction: ActionsEnum = ActionsEnum.ADD;
  editAction: ActionsEnum = ActionsEnum.EDIT;

  cservice: CapacitorService;
  rservice: ResistorService;
  constructor(public capacitorService: CapacitorService, public resistorService: ResistorService, public dialog: MatDialog,
              private snackBar: MatSnackBar) {
    this.cservice = capacitorService;
    this.rservice = resistorService;
  }

  dataLoaded: boolean;
  displayedColumns: string[] = [ 'actions', 'type', 'value', 'description', 'numItems'];
  dataSource = null;

  ngOnInit() {
    if (this.type == ElementEnum.Capacitor) {
      this.displayedColumns = [ 'actions', 'type', 'value', 'description', 'numItems', 'capacitorType'];
    } else{
      this.displayedColumns = [ 'actions', 'type', 'value', 'description', 'numItems', 'volume'];
    }
    this.getData();
  }

  private getData() {
    if (this.type == ElementEnum.Capacitor){
      this.cservice.getCapacitors().subscribe((response: Capacitor[]) => {
        this.handleElemRetrieval(response);

      });
    } else if (this.type == ElementEnum.Resistor){
      this.rservice.getResistors().subscribe((response: Resistor[]) => {
        this.handleElemRetrieval(response);
      });
    }
  }

  handleElemRetrieval(response: any){
    if (response != null) {
      this.dataLoaded = true;
      this.dataSource = new MatTableDataSource(response);
      setTimeout(() => {
        this.dataSource.sort = this.sort;
      });
    }
  }

  openDialog(action: ActionsEnum, elem: any): void {
    let elem1 = Object.assign({}, elem);
    const dialogRef = this.dialog.open(RlcEditComponent, {
      width: '350px',
      data: { type: this.type, element: elem1, action: action}
    });

    dialogRef.afterClosed().subscribe(result => {
     this.getData();
    });
  }

  deleteElement(element: BaseElement){
    if (this.type == ElementEnum.Capacitor){
      this.cservice.deleteOne(element._id).subscribe(
        (response) => {},
        err => this.handleError(),
        () => this.handleSucess());
    } else if (this.type == ElementEnum.Resistor){
      this.rservice.deleteOne(element._id).subscribe(
        (response) => {},
        err => this.handleError(),
        () => this.handleSucess());
    }

  }

  public handleSucess(){
    this.snackBar.open('Successfully deleted.', 'SUCCESS', { duration: 2000, verticalPosition: 'top' });
    this.getData();
  }

  public handleError(){
    this.snackBar.open('Error occured!', 'ERROR', { duration: 2000, verticalPosition: 'top'});
  }

}
