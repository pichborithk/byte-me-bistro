package dev.pichborith.ByteMeBistro.repositories;

import dev.pichborith.ByteMeBistro.models.reservation.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepo extends JpaRepository<Reservation, Integer> {

    // This is method for query reservations join with users if Fetch Type is Lazy
//    @Query("FROM Reservation r JOIN FETCH r.user")
//    List<Reservation> findAllWithUser();
}
