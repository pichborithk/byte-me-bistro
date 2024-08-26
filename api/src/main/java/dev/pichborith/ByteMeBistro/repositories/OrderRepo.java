package dev.pichborith.ByteMeBistro.repositories;

import dev.pichborith.ByteMeBistro.models.order.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderRepo extends JpaRepository<Order, Integer> {

    // This is method for query orders join with users if Fetch Type is Lazy
    @Query("FROM Order o JOIN FETCH o.user")
    List<Order> findAllWithUser();

    /* This is method for query orders join with orders_items and items if Fetch Type is Lazy
    @Query("FROM Order o JOIN FETCH o.orderItems oi JOIN FETCH oi.item WHERE o.id = :orderId")
    Order findByIdWithItems(int orderId);
    */

    @Query("FROM Order o JOIN FETCH o.orderItems oi WHERE o.id = :orderId")
    Order findByIdWithItems(int orderId);

    List<Order> findAllByUserId(int userId);
}
