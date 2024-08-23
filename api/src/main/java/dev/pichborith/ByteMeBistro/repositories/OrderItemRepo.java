package dev.pichborith.ByteMeBistro.repositories;

import dev.pichborith.ByteMeBistro.models.order.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepo extends JpaRepository<OrderItem, Integer> {
}
