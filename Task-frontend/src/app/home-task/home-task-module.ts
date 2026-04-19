import { NgModule } from '@angular/core';

import { Home } from './home/home';
import { TaskCard } from './task-card/task-card';
import { HomeTaskRoutingModule } from './home-task-routing-module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NewTask } from './new-task/new-task';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { Dialog } from './shared/component/dialog/dialog';
import { DialogDelete } from './shared/component/dialog-delete/dialog-delete';

@NgModule({
  declarations: [Home, TaskCard, NewTask, Dialog, DialogDelete],
  imports: [
    CommonModule,
    HomeTaskRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatMenuModule,
    MatDialogModule,
  ],
  exports: [
    HomeTaskRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
  ],
})
export class HomeTaskModule {}
