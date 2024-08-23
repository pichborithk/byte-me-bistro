package dev.pichborith.ByteMeBistro.services;

import dev.pichborith.ByteMeBistro.models.Item.Item;
import dev.pichborith.ByteMeBistro.models.Item.ItemResponse;
import org.springframework.stereotype.Service;

@Service
public class ItemMapper {

    public ItemResponse toItemResponse(Item item) {
        return new ItemResponse(item.getId(), item.getName(),
                                item.getPrice(),
                                item.getCategory().getName());
    }
}
