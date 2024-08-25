package dev.pichborith.ByteMeBistro.services;

import dev.pichborith.ByteMeBistro.models.reservation.Reservation;
import dev.pichborith.ByteMeBistro.models.reservation.ReservationResponse;
import dev.pichborith.ByteMeBistro.models.user.UserResponse;
import org.springframework.stereotype.Service;

@Service
public class ReservationMapper {

    public ReservationResponse toReservationResponse(Reservation reservation) {
        var user = new UserResponse(reservation.getUser().getId(),
                                    reservation.getUser().getUsername(),
                                    reservation.getUser().getRole());

        return new ReservationResponse(reservation.getId(),
                                       reservation.getStatus(),
                                       reservation.getDate(),
                                       reservation.getTime(),
                                       reservation.getPartySize(), user);
    }
}
