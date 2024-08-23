package dev.pichborith.ByteMeBistro.models.order;

import dev.pichborith.ByteMeBistro.models.user.UserResponse;

import java.sql.Timestamp;

public record OrderResponse(
    int id,
    String status,
    Timestamp createdAt,
    UserResponse user
    ) {
}
