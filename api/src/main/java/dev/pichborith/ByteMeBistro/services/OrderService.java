package dev.pichborith.ByteMeBistro.services;

import dev.pichborith.ByteMeBistro.models.order.OrderResponse;
import dev.pichborith.ByteMeBistro.repositories.OrderRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepo orderRepo;
    private final OrderMapper orderMapper;

    public List<OrderResponse> getAll() {
        return orderRepo.findAllWithUser()
                        .stream()
                        .map(orderMapper::toOrderResponse)
                        .toList();
    }
}
