package dev.pichborith.ByteMeBistro.models.Item;

import java.math.BigDecimal;

public record ItemResponse(
    int id,
    String name,
    BigDecimal price,
    String imageUrl,
    String category
) {}
