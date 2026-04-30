import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from './itask';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  tasks: ITask[] = [];


    private api = "http://localhost:8080/task";

  constructor(private http: HttpClient) { }

  listTask(): Observable<ITask[]>
  {
    return this.http.get<ITask[]>(this.api);
  }
  

  
  listarPorStatus(status: string) {
    return this.http.get<ITask[]>(
      `${this.api}/status/${status}`
    )
  }
  updateStatus(id: number, status: string): Observable<any> {
    return this.http.patch(
      `${this.api}/${id}/status`,
      JSON.stringify(status), 
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  savePost(dados: any): Observable<any>{
    return this.http.post(this.api, dados)
  }

}
