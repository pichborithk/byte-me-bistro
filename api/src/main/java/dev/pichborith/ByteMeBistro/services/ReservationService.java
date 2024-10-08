package dev.pichborith.ByteMeBistro.services;

import dev.pichborith.ByteMeBistro.models.reservation.ReservationRequest;
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
//        return reservationRepo.findAllWithUser()
//                              .stream()
//                              .map(reservationMapper::toReservationResponse)
//                              .toList();

        return reservationRepo.findAll()
                              .stream()
                              .map(reservationMapper::toReservationResponse)
                              .toList();
    }

    public ReservationResponse create(ReservationRequest request) {
        var reservation = reservationMapper.toReservation(request);

        return reservationMapper.toReservationResponse(reservationRepo.save(reservation));
    }
}
