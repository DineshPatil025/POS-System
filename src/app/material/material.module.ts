import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';


let matArr = [
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatSnackBarModule,
]

@NgModule({

  declarations: [],
  imports: [
    CommonModule,
    ...matArr
  ],
  exports: [
    ...matArr
  ]
})
export class MaterialModule { }
