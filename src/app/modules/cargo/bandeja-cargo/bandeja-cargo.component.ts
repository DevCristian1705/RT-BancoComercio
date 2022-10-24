import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { GeneralPage } from 'app/shared/interface-paginator';
import { ICargo } from '../interface/cargo.interface';
import { RegistroCargoComponent } from '../registro-cargo/registro-cargo.component';
import { CargoService } from '../service/service-cargo.service';

@Component({
  selector: 'app-bandeja-cargo',
  templateUrl: './bandeja-cargo.component.html',
  styleUrls: ['./bandeja-cargo.component.scss']
})
export class BandejaCargoComponent implements OnInit {

  displayedColumnsCargo: string[] = ['codigoCargo', 'nombreCargo', 'accion'];
  dataSourceCargo: any[];

  tableCargo: GeneralPage;

  nombreCargo: string = '';
  pagina: number = 0;
  size: number = 10;

  constructor(
    public dialog: MatDialog,
    private apiService: CargoService,
    private _fuseConfirmationService: FuseConfirmationService
  ) { }

  ngOnInit(): void {
   // this.onLoadTableCargo();
  }

  onRefresh() {
    this.nombreCargo = '';
   // this.onLoadTableCargo();
  }

  onAddCargo() {
    const dialogRef = this.dialog.open(RegistroCargoComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onLoadTableCargo();
      }
    });
  }

  onLoadTableCargo() {
    this.apiService.listCargo(this.pagina, this.size, this.nombreCargo).subscribe((resp: any) => {
      if (resp) {
        this.tableCargo = resp.data;
      }
    });
  }

  onChangePagination(event: PageEvent) {
    this.pagina = event.pageIndex;
    this.size = event.pageSize;

    this.apiService.listCargo(this.pagina, this.size, this.nombreCargo).subscribe((resp: any) => {
      this.tableCargo = resp.data;
    });
  }


  onEditCargo(data: ICargo) {
    const dialogRef = this.dialog.open(RegistroCargoComponent, {
      width: '500px',
      data: data
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onLoadTableCargo();
      }
    });
  }

  onDeleteCargo(idCargo: number) {
    const dialogRef = this._fuseConfirmationService.delete();

    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'confirmed') {
        this.apiService.deleteCargo(idCargo).subscribe((resp) => {
          this.onLoadTableCargo();
        });
      }
    });
  }

}
