import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  standalone: false,
  templateUrl: './dialog.html',
  styleUrl: './dialog.css',
})
export class Dialog {
     constructor(private dialogRef: MatDialogRef<Dialog>) {}
      onClose() {
        this.dialogRef.close();
      }
}
