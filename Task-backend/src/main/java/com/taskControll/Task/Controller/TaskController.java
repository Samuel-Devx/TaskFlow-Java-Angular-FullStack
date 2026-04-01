package com.taskControll.Task.Controller;

import com.taskControll.Task.DTO.TaskDTO;
import com.taskControll.Task.Enum.StatusTask;
import com.taskControll.Task.Service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/task")
public class TaskController {

    private final TaskService service;

    @PostMapping()
    public ResponseEntity<TaskDTO> save (@RequestBody TaskDTO dto){
        return ResponseEntity.
                status(HttpStatus.CREATED).body(service.save(dto));
    }
    @GetMapping()
    public ResponseEntity<List<TaskDTO>> findAll() {
        return ResponseEntity
                .ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TaskDTO> findById(@PathVariable Long id){
        return ResponseEntity
                .ok(service.findById(id));
    }
    @PatchMapping("/{id}/{task}")
    public ResponseEntity<TaskDTO> alterStats(@PathVariable Long id, @RequestBody StatusTask status){
        return ResponseEntity.ok(service.alterStats(id, status));
    }

}
