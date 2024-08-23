package dev.pichborith.ByteMeBistro.models.MenuItem;

import java.math.BigDecimal;

public record MenuItemResponse(
    int id,
    String name,
    BigDecimal price,
    String category
) {}
