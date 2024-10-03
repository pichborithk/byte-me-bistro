package dev.pichborith.ByteMeBistro.services;

import dev.pichborith.ByteMeBistro.models.reservation.Reservation;
import dev.pichborith.ByteMeBistro.models.reservation.ReservationRequest;
import dev.pichborith.ByteMeBistro.models.reservation.ReservationResponse;
import org.springframework.stereotype.Service;

import java.sql.Time;

@Service
public class ReservationMapper {

    public ReservationResponse toReservationResponse(Reservation reservation) {
        return new ReservationResponse(reservation.getId(),
                                       reservation.getName(),
                                       reservation.getPhoneNumber(),
                                       reservation.getPartySize(),
                                       reservation.getDate(),
                                       reservation.getTime(),
                                       reservation.getStatus()
        );
    }

    public Reservation toReservation(ReservationRequest request) {
        var time = new Time(request.time().getTime());

        return new Reservation(0,
                               request.name(),
                               request.phoneNumber(),
                               request.partySize(),
                               request.date(),
                               time,
                               "Pending");
    }
}
