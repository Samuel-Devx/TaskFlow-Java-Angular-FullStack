package com.taskControll.Task.DTO;

import lombok.Data;

@Data
public class ErrorResponse {
    private int status;
    private String mensagem;
}
