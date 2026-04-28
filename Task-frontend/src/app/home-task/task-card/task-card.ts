import { Component, inject, Inject, Input } from '@angular/core';
import { ITask } from '../itask';
import { TaskService } from '../task-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { delay } from 'rxjs';
import { DialogDelete } from '../shared/component/dialog-delete/dialog-delete'; 
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-task-card',
  standalone: false,
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {

  @Input() task!: ITask;
  readonly dialog = inject(MatDialog);
  readonly Deletedialog = inject(MatDialog);
  
  constructor(private taskService: TaskService, private snackBar: MatSnackBar, ){  
  }

  onSnackBar(message: string) {
    return this.snackBar.open(message, 'Fechar', {
      duration: 3000, 
    });
  }
  
  onReload(){
    window.location.reload();
  }

  
    
  getStatusClass(subtitulo: string): string {
  switch (subtitulo) {
    case 'Criação':
      return 'criacao';
    case 'Refatoração':
      return 'refatoracao';
    case 'Ajuste':
      return 'ajuste';
    case 'Bug':
      return 'bug';
    default:
      return '';
  }
}


  onDelete(){
    this.Deletedialog.open(DialogDelete).afterClosed().subscribe((result) => {
      if (result) {
        this.updateStatus(this.task.id, "DESATIVADA");
      }
    });
  }
  
  onOpenDialog(){
    this.dialog.open(DialogDelete)
  }
  updateStatus(id: number, status: string) {
    if(status === "COMPLETA"){
       this.onSnackBar(`A Task ${this.task.titulo} foi completa!`).afterDismissed().pipe(delay(100)).subscribe(() => {
        this.onReload();
      });
    }
    if(status === "DESATIVADA"){
       this.onSnackBar(`A Task ${this.task.titulo} foi deletada!`),
       this.onReload()
    }  
    this.taskService.updateStatus(id, status).subscribe({
    next: (res: any) => {
      console.log('Atualizado!', res);

      
    },
    error: (err: any) => {
      console.error('Erro ao atualizar', err);
    }
  });
}
}
