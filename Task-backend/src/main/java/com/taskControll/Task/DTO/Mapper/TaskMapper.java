package com.taskControll.Task.DTO.Mapper;

import com.taskControll.Task.DTO.TaskDTO;
import com.taskControll.Task.Enum.StatusTask;
import com.taskControll.Task.Model.Task;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Data
@AllArgsConstructor
@Configuration
public class TaskMapper {

    public Task toEntity(TaskDTO dto){
        Task entidy = new Task();

        entidy.setTitulo(dto.getTitulo());
        entidy.setSubtitulo(dto.getSubtitulo());
        entidy.setDescricao(dto.getDescricao());
        entidy.setStatus(StatusTask.PENDENTE);

        return entidy;
    }
    public TaskDTO toDto(Task entidy){
        TaskDTO dto = new TaskDTO();

        dto.setId(entidy.getId());
        dto.setTitulo(entidy.getTitulo());
        dto.setSubtitulo(entidy.getSubtitulo());
        dto.setDescricao(entidy.getDescricao());
        dto.setStatus(entidy.getStatus());

        return dto;
    }
}
