package com.taskControll.Task.Repository;

import com.taskControll.Task.Enum.StatusTask;
import com.taskControll.Task.Model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByStatus(StatusTask statusTask);
}
