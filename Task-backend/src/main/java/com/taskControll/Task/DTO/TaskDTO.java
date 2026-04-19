package com.taskControll.Task.DTO;

import com.taskControll.Task.Enum.StatusTask;
import jakarta.persistence.*;
import lombok.Data;

@Data
public class TaskDTO {

    private long id;

    private String titulo;

    private String subtitulo;

    private String descricao;

    private StatusTask status;
}
