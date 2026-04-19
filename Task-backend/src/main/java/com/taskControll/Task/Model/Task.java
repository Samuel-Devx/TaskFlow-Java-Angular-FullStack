package com.taskControll.Task.Model;


import com.taskControll.Task.Enum.StatusTask;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity(name = "tb_task")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 30)
    private String titulo;

    @Column(nullable = false, length = 20)
    private String subtitulo;

    @Column(nullable = false, length = 100)
    private String descricao;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", length = 25)
    private StatusTask status;
}
