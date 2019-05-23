import { CommonModule } from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {
  MatFormFieldModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatTabsModule,
  MatProgressBarModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatSnackBarModule,
  MatDialogModule,
  MatIconModule
} from '@angular/material';
import {FormsModule} from "@angular/forms"
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import {SettingsComponent} from "./components/settings/settings.component";
import {CapacitorsComponent} from "./components/rlc/capacitors/capacitors.component";
import {InductorsComponent} from "./components/rlc/inductors/inductors.component";
import {ResistorsComponent} from "./components/rlc/resistors/resistors.component";
import {CombinatorComponent} from "./components/rlc/combinator/combinator.component";
import {RlcEditComponent} from "./components/rlc/rlc-edit/rlc-edit.component";
import {CombinationsComponent} from "./components/rlc/combinations/combinations.component";
import {RlcTableComponent} from "./components/rlc/rlc-table/rlc-table.component";
import {DialogConfirmComponent} from "./components/common/dialog-confirm/dialog-confirm.component";
import {FooterComponent} from "./components/footer/footer.component";
import {TermsComponent} from "./components/terms/terms.component";

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MatTableModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        MatCardModule,
        MatProgressBarModule,
        MatPaginatorModule,
        MatSelectModule,
        MatCardModule,
        MatTabsModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        FormsModule,
        MatSortModule,
        MatSnackBarModule,
        MatDialogModule,
        MatIconModule
    ],
  exports: [RlcEditComponent, DialogConfirmComponent],
  declarations: [
      LayoutComponent,
      TopnavComponent,
      SidebarComponent,
      SettingsComponent,
      InductorsComponent,
      ResistorsComponent,
      CapacitorsComponent,
      CombinatorComponent,
      CombinationsComponent,
      RlcEditComponent,
      RlcTableComponent,
      DialogConfirmComponent,
      FooterComponent,
      TermsComponent],
  entryComponents: [RlcEditComponent, DialogConfirmComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LayoutModule {}
