import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ITask } from '../itask';
import { TaskService } from '../task-service';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Dialog } from '../shared/component/dialog/dialog';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  tasks: ITask[] = [];
  dialogRef: any;
  
  constructor(private taskService: TaskService, private cd: ChangeDetectorRef, private router: Router) {}

  ngOnInit(): void {
      this.carregarEventos();
  }
  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialogRef = this.dialog.open(Dialog);
  
  }

  

  carregarEventos(status : string = 'PENDENTE' ) {
    this.taskService.listarPorStatus(status).subscribe({
      next: (res: ITask[]) => {
        this.tasks = res;
        this.cd.detectChanges();
 
      },
      error: (err: any) => console.error(err)
    });
   
}
onList(){
      this.taskService.listTask().subscribe({
        next: (res: ITask[]) => {
          this.tasks = res;
          this.cd.detectChanges();
          if (this.tasks.length === 0){
               this.openDialog();
      }
   
        },
        error: (err: any) => console.error(err)
      });
    }
}
