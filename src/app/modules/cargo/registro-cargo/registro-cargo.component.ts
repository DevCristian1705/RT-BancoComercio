import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ICargo } from '../interface/cargo.interface';
import { CargoService } from '../service/service-cargo.service';

@Component({
  selector: 'app-registro-cargo',
  templateUrl: './registro-cargo.component.html',
  styleUrls: ['./registro-cargo.component.scss']
})
export class RegistroCargoComponent implements OnInit {

  form: FormGroup;
  mensaje: string = "";

  constructor(
    public dialogRef: MatDialogRef<RegistroCargoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: CargoService,
    private matSnackBar: MatSnackBar
  ) {
    this.builform();
  }

  ngOnInit(): void {
  }

  private builform(): void {
    this.form = new FormGroup({
      codigoCargo: new FormControl(this.data?.codigoCargo, Validators.required),
      nombreCargo: new FormControl(this.data?.nombreCargo, Validators.required),
    });
  }

  onSave(): void {

    if (!this.form.valid) {
      this.matSnackBar.open(
        'Por favor, completa el formulario.',
        'Cerrar',
        { duration: 3000, verticalPosition: 'top', horizontalPosition: 'end' }
      );
      return;
    }

    const data = this.form.getRawValue();

    const newCargo: ICargo = {
      idCargo: this.data ? this.data.idCargo : 0,
      codigoCargo: data.codigoCargo,
      nombreCargo: data.nombreCargo,
    };

    if (!this.data) {
      this.mensaje = 'Cargo registrado con éxito.';
      this.apiService.saveCargo(newCargo).subscribe((response) => {
        if (response) {
          this.matSnackBar.open(
            this.mensaje,
            'Cerrar',
            { duration: 3000, verticalPosition: 'top', horizontalPosition: 'end' }
          );
          this.dialogRef.close(true);
        }
      });
    } else {
      this.mensaje = 'Cargo actualizado con éxito.';
      this.apiService.updateCargo(newCargo).subscribe((response) => {
        if (response) {
          this.matSnackBar.open(
            this.mensaje,
            'Cerrar',
            { duration: 3000, verticalPosition: 'top', horizontalPosition: 'end' }
          );
          this.dialogRef.close(true);
        }
      });
    }



  }
}
