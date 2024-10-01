package dev.pichborith.ByteMeBistro.models.reservation;

import dev.pichborith.ByteMeBistro.models.user.User;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Time;
import java.util.Date;

@Data
@NoArgsConstructor
@Entity
@Table(name = "reservations")
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String phone;
    private int partySize;

    private Date date;
    private Time time;

    private String status;

}