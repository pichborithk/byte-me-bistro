package dev.pichborith.ByteMeBistro.models;

public record ResponseFrom<T> (boolean isSuccess, String message, T data) {

    public ResponseFrom(String message, T data) {
        this(true, message, data);
    }

    public ResponseFrom(String message) {
        this(false, message, null);
    }
}
