package dev.pichborith.ByteMeBistro.models.order;

import dev.pichborith.ByteMeBistro.models.MenuItem.Item;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "orders_items")
@IdClass(OrderItem.class)
public class OrderItem {

    @Id
    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    @Id
    @ManyToOne
    @JoinColumn(name = "menu_item_id")
    private Item item;

    private int quantity;

}