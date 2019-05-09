import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CapacitorService} from "../../shared/services/capacitor.service";
import {Capacitor} from "../../shared/model/capacitor";
import {ElementEnum} from "../../shared/model/element-enum";
import {RlcEditComponent} from "../rlc-edit/rlc-edit.component";
import {MatDialog, MatTableDataSource, MatSnackBar, MatSort} from '@angular/material';
import {ActionsEnum} from "../../shared/model/actions-enum";
import {ResistorService} from "../../shared/services/resistor.service";
import {Resistor} from "../../shared/model/resistor";
import {BaseElement} from "../../shared/model/base-element";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-rlc-table',
  templateUrl: './rlc-table.component.html',
  styleUrls: ['./rlc-table.component.scss'],
  providers: [CapacitorService, ResistorService, AuthService]
})
export class RlcTableComponent implements OnInit {

  @Input() type: ElementEnum;

  @ViewChild(MatSort) sort: MatSort;

  addAction: ActionsEnum = ActionsEnum.ADD;
  editAction: ActionsEnum = ActionsEnum.EDIT;

  cservice: CapacitorService;
  rservice: ResistorService;
  constructor(public capacitorService: CapacitorService, public resistorService: ResistorService,
              public dialog: MatDialog, private snackBar: MatSnackBar, public authService: AuthService) {
    this.cservice = capacitorService;
    this.rservice = resistorService;
  }

  dataLoaded: boolean;
  displayedColumns: string[] = [ 'actions', 'type', 'value', 'description', 'numItems'];
  dataSource = null;

  unit: string;

  ngOnInit() {
    if (this.type == ElementEnum.Capacitor) {
      this.displayedColumns = [ 'actions', 'type', 'value', 'description', 'numItems', 'capacitorType'];
      this.unit = "F";
    } else{
      this.displayedColumns = [ 'actions', 'type', 'value', 'description', 'numItems', 'volume'];
      this.unit = "Ω";
    }
    this.getData();
  }

  private getData() {
    if (this.type == ElementEnum.Capacitor){
      this.cservice.getCapacitors().subscribe(
        (response: Capacitor[]) => this.handleElemRetrieval(response),
        err => this.handleError('Error occurred while retrieving data.', err));
    } else if (this.type == ElementEnum.Resistor){
      this.rservice.getResistors().subscribe(
        (response: Resistor[]) =>  this.handleElemRetrieval(response),
        err => this.handleError('Error occurred while retrieving data.', err)
      );
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
      this.cservice.deleteOne(element.id).subscribe(
        (response) => {},
        err => this.handleError(null, err),
        () => this.handleSuccess('Successfully deleted.'));
    } else if (this.type == ElementEnum.Resistor){
      this.rservice.deleteOne(element.id).subscribe(
        (response) => {},
        err => this.handleError(null, err),
        () => this.handleSuccess('Successfully deleted.'));
    }

  }

  public handleSuccess(msg: string){
    let message = 'Operation performed successfully.';
    if (msg != null){
      message = msg;
    }
    this.snackBar.open(message, 'SUCCESS', { duration: 2000, verticalPosition: 'top' });
    this.getData();
  }

  public handleError(msg: string, error: any){
    if (error.status == 401){
      //this.authService.logout();
    } else {
      let message = 'Error occurred!';
      if (msg != null){
        message = msg;
      }
      this.snackBar.open(message, 'ERROR', { duration: 2000, verticalPosition: 'top'});
    }

  }

}
