package dev.pichborith.ByteMeBistro.services;

import dev.pichborith.ByteMeBistro.models.reservation.Reservation;
import dev.pichborith.ByteMeBistro.models.reservation.ReservationResponse;
import dev.pichborith.ByteMeBistro.models.user.UserResponse;
import org.springframework.stereotype.Service;

@Service
public class ReservationMapper {

    public ReservationResponse toReservationResponse(Reservation reservation) {
        return new ReservationResponse(reservation.getId(),
                                       reservation.getName(),
                                       reservation.getPhone(),
                                       reservation.getPartySize(),
                                       reservation.getDate(),
                                       reservation.getTime(),
                                       reservation.getStatus()
        );
    }
}
