package dev.pichborith.ByteMeBistro.services;

import dev.pichborith.ByteMeBistro.models.reservation.ReservationResponse;
import dev.pichborith.ByteMeBistro.repositories.ReservationRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReservationService {

    private final ReservationRepo reservationRepo;
    private final ReservationMapper reservationMapper;

    public List<ReservationResponse> getAll() {
        return reservationRepo.findAllWithUser()
                              .stream()
                              .map(reservationMapper::toReservationResponse)
                              .toList();
    }
}
