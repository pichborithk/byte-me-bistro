package dev.pichborith.ByteMeBistro.models;

public record ResponseForm<T> (boolean isSuccess, String message, T data) {

    public ResponseForm(String message, T data) {
        this(true, message, data);
    }

    public ResponseForm(String message) {
        this(false, message, null);
    }
}
