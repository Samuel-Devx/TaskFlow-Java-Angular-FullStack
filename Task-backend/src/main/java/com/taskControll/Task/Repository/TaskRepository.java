package com.taskControll.Task.Repository;

import com.taskControll.Task.Model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
