package dev.pichborith.ByteMeBistro.models.reservation;

import java.util.Date;

public record ReservationRequest(
    String name,
    String phoneNumber,
    int partySize,
    Date date,
    Date time
) {
}
