package dev.pichborith.ByteMeBistro.repositories;

import dev.pichborith.ByteMeBistro.models.order.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;


public interface OrderItemRepo extends JpaRepository<OrderItem, Integer> {

//    @Query(value = """
//        SELECT i.id AS id, i.name AS name, i.price AS price, c.name AS category, oi.quantity AS quantity
//        FROM orders_items AS oi
//        JOIN items AS i ON i.id = oi.item_id
//        JOIN categories AS c ON i.category_id = c.id
//        WHERE oi.order_id = :orderId
//        """, nativeQuery = true)
//    List<OrderItemResponse> findAllByOrderId(int orderId);
}
