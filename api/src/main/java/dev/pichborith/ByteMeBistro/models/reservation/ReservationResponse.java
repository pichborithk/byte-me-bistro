package dev.pichborith.ByteMeBistro.models.reservation;

import java.sql.Time;
import java.util.Date;

public record ReservationResponse(
    int id,
    String name,
    String phoneNumber,
    int partySize,
    Date date,
    Time time,
    String status
) {
}
