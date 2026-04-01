package com.taskControll.Task.Exception;

import com.taskControll.Task.DTO.ErrorResponse;
import com.taskControll.Task.Exception.PersonException.NotFind;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalHandle {


    @ExceptionHandler(NotFind.class)
    public ResponseEntity<ErrorResponse> handleNotFind(NotFind notFind){
        ErrorResponse response = new ErrorResponse();
        response.setStatus(HttpStatus.NOT_FOUND.value());
        response.setMensagem("Id não encontrado!");
        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
    }
}
