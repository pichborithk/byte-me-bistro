package dev.pichborith.ByteMeBistro.models.reservation;

import dev.pichborith.ByteMeBistro.models.user.UserResponse;

import java.sql.Time;
import java.util.Date;

public record ReservationResponse(
    int id,
    String name,
    String phone,
    int partySize,
    Date date,
    Time time,
    String status
) {
}
