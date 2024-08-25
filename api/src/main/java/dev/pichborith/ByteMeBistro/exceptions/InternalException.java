package dev.pichborith.ByteMeBistro.exceptions;

public class InternalException extends RuntimeException{

    public InternalException(Throwable cause) {
        super(cause);
    }

    public InternalException(String message) {
        super(message);
    }

    public InternalException(String message, Throwable cause) {
        super(message, cause);
    }
}
