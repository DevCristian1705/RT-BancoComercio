import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandejaCargoComponent } from './bandeja-cargo/bandeja-cargo.component';
import { RegistroCargoComponent } from './registro-cargo/registro-cargo.component';
import { Route, RouterModule } from '@angular/router';
import { MaterialModule } from 'app/shared/material/material.module';
import { SharedModule } from 'app/shared/shared.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorImpl } from 'app/shared/mat-paginator';

const cargoRoutes: Route[] = [
  {
    path: '',
    component: BandejaCargoComponent
  }
];

@NgModule({
  declarations: [
    BandejaCargoComponent,
    RegistroCargoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(cargoRoutes),
    MaterialModule,
    SharedModule,  
  ],
  providers:[
    { provide: MatPaginatorIntl, useClass: MatPaginatorImpl },
  ]
})
export class CargoModule { }
