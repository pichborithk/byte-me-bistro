package dev.pichborith.ByteMeBistro.models.MenuItem;

import java.math.BigDecimal;

public record ItemResponse(
    int id,
    String name,
    BigDecimal price,
    String category
) {}
