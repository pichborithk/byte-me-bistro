package dev.pichborith.ByteMeBistro.exception;


import dev.pichborith.ByteMeBistro.models.ResponseForm;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
class GlobalExceptionHandler {

    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<ResponseForm<String>> handleException(
        BadRequestException e) {

        ResponseForm<String> response = new ResponseForm<>(e.getMessage());

        return new ResponseEntity<>(response, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<ResponseForm<String>> handleException(
        NotFoundException e) {

        ResponseForm<String> response = new ResponseForm<>(e.getMessage());

        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(ConflictException.class)
    public ResponseEntity<ResponseForm<String>> handleException(ConflictException e) {

        ResponseForm<String> response = new ResponseForm<>(e.getMessage());

        return new ResponseEntity<>(response, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(UnauthorizedException.class)
    public ResponseEntity<ResponseForm<String>> handleException(
        UnauthorizedException e) {

        ResponseForm<String> response = new ResponseForm<>(e.getMessage());

        return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(InternalException.class)
    public ResponseEntity<ResponseForm<String>> handleException(
        InternalException e) {

        ResponseForm<String> response = new ResponseForm<>(e.getMessage());

        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler
    public ResponseEntity<ResponseForm> handleException(Exception e) {

        ResponseForm<String> response = new ResponseForm<>(e.getMessage());

        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }
}
