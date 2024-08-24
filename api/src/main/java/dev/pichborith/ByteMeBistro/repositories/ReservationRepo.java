package dev.pichborith.ByteMeBistro.repositories;

import dev.pichborith.ByteMeBistro.models.reservation.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ReservationRepo extends JpaRepository<Reservation, Integer> {

    // This is method for query reservations join with users if Fetch Type is Lazy
    @Query("FROM Reservation r JOIN FETCH r.user")
    List<Reservation> findAllWithUser();
}
