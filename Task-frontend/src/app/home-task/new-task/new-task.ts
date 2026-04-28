import { Component } from '@angular/core';
import { HomeTaskModule } from '../home-task-module';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task-service';
import { error } from 'console';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogDelete } from '../shared/component/dialog-delete/dialog-delete';
@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
  
})
export class NewTask {
  form: FormGroup
   dialogRef: any
  constructor(private fb: FormBuilder, private taskService: TaskService, private snackBar: MatSnackBar, ) {
    this.form = this.fb.group({
      titulo:['', Validators.required],
      descricao:['', [Validators.required, Validators.minLength(10)]],
      subtitulo:['', Validators.required]
    }
    );
  }
  onSnackBar(message: string) {
    this.snackBar.open(message, 'Fechar', {
      duration: 3000, 
    });
  }



  onSubmit(){
    if(this.form.valid){
      this.taskService.savePost(this.form.value).subscribe({
        next: (res) => this.onSnackBar("Task criada com sucesso!"), 
        error: (error) =>  this.onSnackBar("Erro ao criar a Task!")
      })
    }
  }
  
}
