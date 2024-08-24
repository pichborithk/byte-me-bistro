package dev.pichborith.ByteMeBistro.models.order;

import dev.pichborith.ByteMeBistro.models.Item.ItemResponse;

import java.math.BigDecimal;

//public interface OrderItemResponse {
//    int getId();
//    String getName();
//    BigDecimal getPrice();
//    String getCategory();
//    int getQuantity();
//}

public record OrderItemResponse(
    ItemResponse item,
    int quantity
) {}