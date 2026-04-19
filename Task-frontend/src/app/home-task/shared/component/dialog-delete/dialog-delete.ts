import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-delete',
  standalone: false,
  templateUrl: './dialog-delete.html',
  styleUrl: './dialog-delete.css',
})
export class DialogDelete {

     
      captureStatus(statusResponse: Boolean) : Boolean{
        return statusResponse;
      }


}
