import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CapacitorService} from "../../../../shared/services/capacitor.service";
import {Capacitor} from "../../../../shared/model/capacitor";
import {ElementEnum} from "../../../../shared/model/element-enum";
import {RlcEditComponent} from "../rlc-edit/rlc-edit.component";
import {MatDialog, MatTableDataSource, MatSnackBar, MatSort, MatPaginator} from '@angular/material';
import {ActionsEnum} from "../../../../shared/model/actions-enum";
import {ResistorService} from "../../../../shared/services/resistor.service";
import {Resistor} from "../../../../shared/model/resistor";
import {BaseElement} from "../../../../shared/model/base-element";
import {AuthService} from "../../../../shared/services/auth.service";
import {InductorService} from "../../../../shared/services/inductor.service";
import {Inductor} from "../../../../shared/model/inductor";
import {DialogConfirmComponent} from "../../common/dialog-confirm/dialog-confirm.component";

@Component({
  selector: 'app-rlc-table',
  templateUrl: './rlc-table.component.html',
  styleUrls: ['./rlc-table.component.scss'],
  providers: [CapacitorService, ResistorService, AuthService, InductorService]
})
export class RlcTableComponent implements OnInit {

  @Input() type: ElementEnum;

  @ViewChild(MatSort) sort: MatSort;

  addAction: ActionsEnum = ActionsEnum.ADD;
  editAction: ActionsEnum = ActionsEnum.EDIT;

  cservice: CapacitorService;
  rservice: ResistorService;
  iservice: InductorService;
  constructor(public capacitorService: CapacitorService, public resistorService: ResistorService,
              public dialog: MatDialog, private snackBar: MatSnackBar, public authService: AuthService,
              public inductorService: InductorService) {
    this.cservice = capacitorService;
    this.rservice = resistorService;
    this.iservice = inductorService;
  }

  dataLoaded: boolean;
  displayedColumns: string[] = [ 'actions', 'type', 'value', 'description', 'numItems'];
  dataSource = null;
  dataSource2 = null;
  displayedColumns2 = ['id', 'name', 'progress', 'color'];

  unit: string;

  ngOnInit() {
    if (this.type == ElementEnum.Capacitor) {
      this.displayedColumns = [ 'actions', 'type', 'value', 'description', 'numItems', 'capacitorType'];
      this.unit = "F";
    } else if (this.type == ElementEnum.Resistor){
      this.displayedColumns = [ 'actions', 'type', 'value', 'description', 'numItems', 'volume'];
      this.unit = "Ω";
    } else if (this.type == ElementEnum.Inductor){
      this.displayedColumns = [ 'actions', 'type', 'value', 'description', 'numItems'];
      this.unit = "H";
    }
    this.getData();

    const users: UserData[] = [];
    var users1=[];
    for (let i = 1; i <= 100; i++) { /*users.push(createNewUser(i));*/

      users1.push({"cnt" : i,"name":"batr"+i});

    }

    // Assign the data to the data source for the table to render
    this.dataSource2 = new MatTableDataSource(users1);
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

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
    } else if (this.type == ElementEnum.Inductor){
      this.iservice.getInductors().subscribe(
        (response: Inductor[]) =>  this.handleElemRetrieval(response),
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

  openEditSaveDialog(action: ActionsEnum, elem: any): void {
    let elem1 = Object.assign({}, elem);
    const dialogRef = this.dialog.open(RlcEditComponent, {
      width: '350px',
      data: { type: this.type, element: elem1}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getData();
    });
  }

  openDeleteDialog(elem: any): void {
    let elem1 = Object.assign({}, elem);
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: '350px',
      data: { element: elem1, eventDelete: null}
    });

    dialogRef.componentInstance.onSubmitEvent.subscribe((element: BaseElement) => {
      this.deleteElement(element);
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
    } else if (this.type == ElementEnum.Inductor){
      this.iservice.deleteOne(element.id).subscribe(
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
      this.authService.logout();
    } else {
      let message = 'Error occurred!';
      if (msg != null){
        message = msg;
      }
      this.snackBar.open(message, 'ERROR', { duration: 2000, verticalPosition: 'top'});
    }

  }

}


/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
