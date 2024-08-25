package dev.pichborith.ByteMeBistro.services;

import dev.pichborith.ByteMeBistro.models.Item.ItemResponse;
import dev.pichborith.ByteMeBistro.models.order.Order;
import dev.pichborith.ByteMeBistro.models.order.OrderItem;
import dev.pichborith.ByteMeBistro.models.order.OrderItemResponse;
import dev.pichborith.ByteMeBistro.models.order.OrderResponse;
import dev.pichborith.ByteMeBistro.models.user.UserResponse;
import org.springframework.stereotype.Service;

@Service
public class OrderMapper {

    public OrderResponse toOrderResponse(Order order) {
        var user = new UserResponse(order.getUser().getId(),
                                    order.getUser().getUsername(), order.getUser().getRole());
        return new OrderResponse(order.getId(), order.getStatus(),
                                 order.getCreatedAt(), user);
    }

    public OrderItemResponse toOrderItemResponse(OrderItem orderItem) {
        var item = orderItem.getItem();
        var itemResponse = new ItemResponse(item.getId(), item.getName(),
                                            item.getPrice(),
                                            item.getCategory().getName());

        return new OrderItemResponse(itemResponse, orderItem.getQuantity());
    }
}
