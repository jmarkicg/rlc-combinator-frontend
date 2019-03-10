import {Component, Input, OnInit} from '@angular/core';
import {CapacitorService} from "../../shared/services/capacitor.service";
import {Capacitor} from "../../shared/model/capacitor";
import {MatTableDataSource} from "@angular/material";
import {ElementEnum} from "../../shared/model/element-enum";

@Component({
  selector: 'app-rlc-table',
  templateUrl: './rlc-table.component.html',
  styleUrls: ['./rlc-table.component.scss'],
  providers: [CapacitorService]
})
export class RlcTableComponent implements OnInit {

  @Input() type: ElementEnum;

  service: CapacitorService;
  constructor(public capacitorService: CapacitorService) {
    this.service = capacitorService;
  }

  dataLoaded: boolean;
  displayedColumns: string[] = [ 'actions', 'type', 'value', 'description', 'numItems'];
  dataSource = null;

  ngOnInit() {
    console.log(this.type);
    this.getData();
  }

  private getData() {
    if (this.type == ElementEnum.Capacitor){
      this.service.getCapacitors().subscribe((response: Capacitor[]) => {
        if (response != null) {
          this.dataLoaded = true;
          this.dataSource = new MatTableDataSource(response);
        }
      });
    } else if (this.type == ElementEnum.Resistor){
      console.log("to do");
    }

  }

  private create(customer: Capacitor) {
    // this.service.add_customer(customer).subscribe(data => {
    //   this.get();
    //
    // });
  }
  private update(customer: Capacitor) {
    // this.service.update_customer(customer).subscribe(data => {
    //
    // });
  }
  private delete(id: number) {
    // this.service.delete_customer(id).subscribe(data => {
    //
    // });
  }

  private action(row: any) {

    if (row.operation === 'added') {
      this.create(row);
      // this.yourMessage.push('success', row.firstName + ' has been added successfully!')
      // this.yourMessage = []
    }
    if (row.operation === 'updated') {
      this.update(row);
      // this.yourMessage.push('success', row.firstName + ' has been updated successfully!')
      // this.yourMessage = []
    }
    if (row.operation === 'deleted') {
      this.delete(row.id);
      // this.yourMessage.push('success', ' has been deleted successfully!')
      // this.yourMessage = []
    }

  }
}
