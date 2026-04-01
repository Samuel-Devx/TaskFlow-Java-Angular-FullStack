package com.taskControll.Task.Service;

import com.taskControll.Task.DTO.Mapper.TaskMapper;
import com.taskControll.Task.DTO.TaskDTO;
import com.taskControll.Task.Enum.StatusTask;
import com.taskControll.Task.Exception.PersonException.NotFind;
import com.taskControll.Task.Model.Task;
import com.taskControll.Task.Repository.TaskRepository;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Data
@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository repository;
    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    private final TaskMapper mapper;

    public List<TaskDTO> findAll(){
        List<Task> listTask = repository.findAll();
        List<TaskDTO> dtosv = listTask.stream()
                .map(entity -> mapper.toDto(entity))
                .collect(Collectors.toList());
        return dtosv;
    }

    public TaskDTO save (TaskDTO dto){
        Task task = mapper.toEntity(dto);
        repository.save(task);
        return mapper.toDto(task);
    }

    public TaskDTO findById(Long id){
        Task task = repository.findById(id)
                .orElseThrow(() -> new NotFind());
    return mapper.toDto(task);
    }

    public TaskDTO alterStats(Long id, StatusTask statusTask){
        Task task = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Id não encontrado"));
        task.setStatus(statusTask);
        repository.save(task);
        return mapper.toDto(task);
    }


;  }