package dev.pichborith.ByteMeBistro.exception;

public class BadRequestException extends RuntimeException {

    public BadRequestException(Throwable cause) {
        super(cause);
    }

    public BadRequestException(String message) {
        super(message);
    }

    public BadRequestException(String message, Throwable cause) {
        super(message, cause);
    }

}