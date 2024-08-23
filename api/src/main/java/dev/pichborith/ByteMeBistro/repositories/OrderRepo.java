package dev.pichborith.ByteMeBistro.repositories;

import dev.pichborith.ByteMeBistro.models.order.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderRepo extends JpaRepository<Order, Integer> {

    @Query("FROM Order o JOIN FETCH o.user")
    List<Order> findAllWithUser();
}
