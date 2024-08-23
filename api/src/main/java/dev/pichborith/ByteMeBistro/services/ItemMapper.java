package dev.pichborith.ByteMeBistro.services;

import dev.pichborith.ByteMeBistro.models.MenuItem.Item;
import dev.pichborith.ByteMeBistro.models.MenuItem.ItemResponse;
import org.springframework.stereotype.Service;

@Service
public class ItemMapper {

    public ItemResponse toItemResponse(Item item) {
        return new ItemResponse(item.getId(), item.getName(),
                                item.getPrice(),
                                item.getCategory().getName());
    }
}
