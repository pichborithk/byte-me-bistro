package dev.pichborith.ByteMeBistro.services;

import dev.pichborith.ByteMeBistro.models.order.OrderItemResponse;
import dev.pichborith.ByteMeBistro.models.order.OrderResponse;
import dev.pichborith.ByteMeBistro.repositories.OrderRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepo orderRepo;
    private final OrderMapper orderMapper;

    public List<OrderResponse> getAll() {
//        return orderRepo.findAllWithUser()
//                        .stream()
//                        .map(orderMapper::toOrderResponse)
//                        .toList();

        return orderRepo.findAll()
                        .stream()
                        .map(orderMapper::toOrderResponse)
                        .toList();
    }

    public List<OrderItemResponse> getByIdWithItems(int orderId) {

        var order = orderRepo.findByIdWithItems(orderId);
        var items = order.getOrderItems();
        List<OrderItemResponse> response = new ArrayList<>();
        for (var item : items) {
            response.add(orderMapper.toOrderItemResponse(item));
        }

        return response;
    }
}
