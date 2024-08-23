package dev.pichborith.ByteMeBistro.repositories;

import dev.pichborith.ByteMeBistro.models.reservation.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ReservationRepo extends JpaRepository<Reservation, Integer> {

    @Query("FROM Reservation r JOIN FETCH r.user")
    List<Reservation> findAllWithUser();
}
