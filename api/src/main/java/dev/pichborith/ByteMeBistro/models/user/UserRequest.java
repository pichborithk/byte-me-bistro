package dev.pichborith.ByteMeBistro.models.user;

public record UserRequest(
    String id,
    String username,
    String password
) {}
