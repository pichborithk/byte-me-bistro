package dev.pichborith.ByteMeBistro.services;

import dev.pichborith.ByteMeBistro.models.MenuItem.MenuItem;
import dev.pichborith.ByteMeBistro.models.MenuItem.MenuItemResponse;
import org.springframework.stereotype.Service;

@Service
public class MenuItemMapper {

    public MenuItemResponse toMenuItemResponse(MenuItem item) {
        return new MenuItemResponse(item.getId(), item.getName(),
                                    item.getPrice(),
                                    item.getCategory().getName());
    }
}
