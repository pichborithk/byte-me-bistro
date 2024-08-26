package dev.pichborith.ByteMeBistro.controllers;

import dev.pichborith.ByteMeBistro.models.ResponseForm;
import dev.pichborith.ByteMeBistro.models.order.OrderItemResponse;
import dev.pichborith.ByteMeBistro.models.order.OrderResponse;
import dev.pichborith.ByteMeBistro.models.user.Role;
import dev.pichborith.ByteMeBistro.services.OrderService;
import dev.pichborith.ByteMeBistro.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/orders")
@CrossOrigin(origins = "${CLIENT_URL}")
public class OrderController {

    private final OrderService orderService;
    private final UserService userService;

    @GetMapping
    public ResponseEntity<ResponseForm<List<OrderResponse>>> getAllOrders() {
        var user = userService.getCurrentUserDetails();
        var orders = user.role() == Role.USER
                     ? orderService.getAllByUserId(user.id())
                     : orderService.getAll();

        var response = new ResponseForm<>("Get all orders successful", orders);
        return ResponseEntity.ok(response);
    }

    @GetMapping("{orderId}")
    public ResponseEntity<ResponseForm<List<OrderItemResponse>>> getAlByOrderIdWithItems(
        @PathVariable int orderId) {
        // Need to implement user validation to increase security later
        var items = orderService.getByIdWithItems(orderId);
        var response = new ResponseForm<>("Get all items in order successful",
                                          items);
        return ResponseEntity.ok(response);
    }
}
