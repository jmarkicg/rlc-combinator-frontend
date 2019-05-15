import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CombinationModel} from "../../../../shared/model/combination-model";
import {MatPaginator, MatTableDataSource, MatSnackBar, MatSort} from '@angular/material';

@Component({
  selector: 'app-combinations',
  templateUrl: './combinations.component.html',
  styleUrls: ['./combinations.component.scss']
})
export class CombinationsComponent implements OnInit {

  @Input() combinations: CombinationModel[];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  displayedColumns: string[] = [ 'errorPercentage', 'value', 'numItems', 'combStringValue'];
  dataSource = null;
  count: number = 0;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.combinations);
    //setTimeout(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.count = this.combinations.length;
   // });
  }

}
