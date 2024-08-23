package dev.pichborith.ByteMeBistro.services;

import dev.pichborith.ByteMeBistro.models.order.Order;
import dev.pichborith.ByteMeBistro.models.order.OrderResponse;
import dev.pichborith.ByteMeBistro.models.user.UserResponse;
import org.springframework.stereotype.Service;

@Service
public class OrderMapper {

    public OrderResponse toOrderResponse(Order order) {
        var user = new UserResponse(order.getUser().getId(),
                                    order.getUser().getUsername());
        return new OrderResponse(order.getId(), order.getStatus(),
                                 order.getCreatedAt(), user);
    }
}
