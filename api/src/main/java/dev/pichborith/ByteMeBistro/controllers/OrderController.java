package dev.pichborith.ByteMeBistro.controllers;

import dev.pichborith.ByteMeBistro.models.ResponseForm;
import dev.pichborith.ByteMeBistro.models.order.OrderItemResponse;
import dev.pichborith.ByteMeBistro.models.order.OrderResponse;
import dev.pichborith.ByteMeBistro.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/orders")
@CrossOrigin(origins = "${CLIENT_URL}")
public class OrderController {

    @Autowired
    OrderService orderService;

    @GetMapping
    public ResponseEntity<ResponseForm<List<OrderResponse>>> getAllOrders() {
        var orders = orderService.getAll();
        var response = new ResponseForm<>("Get all orders successful", orders);
        return ResponseEntity.ok(response);
    }

    @GetMapping("{orderId}")
    public ResponseEntity<ResponseForm<List<OrderItemResponse>>> getAlByOrderIdWithItems(
        @PathVariable int orderId) {
        var items = orderService.getByIdWithItems(orderId);
        var response = new ResponseForm<>("Get all items in order successful", items);
        return ResponseEntity.ok(response);
    }
}
