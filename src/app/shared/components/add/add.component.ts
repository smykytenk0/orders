import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCustomerModalWindowComponent } from '../../../add-customer-modal-window/add-customer-modal-window.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent  {
  @Input() addBtnText;

  constructor(private dialog: MatDialog) {}


  openDialog() {
    const dialogRef = this.dialog.open(AddCustomerModalWindowComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${ result }`);
    })
  }
}