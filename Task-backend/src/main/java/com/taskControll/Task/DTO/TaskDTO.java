package com.taskControll.Task.DTO;

import com.taskControll.Task.Enum.StatusTask;
import jakarta.persistence.*;
import lombok.Data;

@Data
public class TaskDTO {

    private String titulo;

    private String descricao;

    private StatusTask status;
}
