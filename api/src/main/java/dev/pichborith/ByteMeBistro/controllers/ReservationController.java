package dev.pichborith.ByteMeBistro.controllers;

import dev.pichborith.ByteMeBistro.models.ResponseForm;
import dev.pichborith.ByteMeBistro.models.reservation.ReservationResponse;
import dev.pichborith.ByteMeBistro.services.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/reservations")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @GetMapping
    public ResponseEntity<ResponseForm<List<ReservationResponse>>> getAllReservation() {
        var reservations = reservationService.getAll();
        var response = new ResponseForm<>("Get all reservations successful",
                                          reservations);
        return ResponseEntity.ok(response);
    }
}
