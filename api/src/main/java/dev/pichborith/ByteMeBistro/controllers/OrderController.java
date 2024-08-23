package dev.pichborith.ByteMeBistro.controllers;

import dev.pichborith.ByteMeBistro.models.ResponseFrom;
import dev.pichborith.ByteMeBistro.models.order.OrderResponse;
import dev.pichborith.ByteMeBistro.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    OrderService orderService;

    @GetMapping
    public ResponseEntity<ResponseFrom<List<OrderResponse>>> getAllOrders() {
        var orders = orderService.getAll();
        var response = new ResponseFrom<>("Get all orders successful", orders);
        return ResponseEntity.ok(response);
    }
}
