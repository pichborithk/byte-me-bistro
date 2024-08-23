package dev.pichborith.ByteMeBistro.models.reservation;

import dev.pichborith.ByteMeBistro.models.user.UserResponse;

import java.sql.Time;
import java.util.Date;

public record ReservationResponse(
    int id,
    String status,
    Date date,
    Time time,
    int partySize,
    UserResponse user
) {
}
