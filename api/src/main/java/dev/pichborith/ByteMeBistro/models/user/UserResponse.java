package dev.pichborith.ByteMeBistro.models.user;

public record UserResponse(
    int id,
    String username,
    Role role
) {
}
