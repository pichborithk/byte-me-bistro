package dev.pichborith.ByteMeBistro.services;

import dev.pichborith.ByteMeBistro.models.MenuItem.MenuItemResponse;
import dev.pichborith.ByteMeBistro.repositories.MenuItemRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MenuItemService {

    private final MenuItemRepo menuItemRepo;
    private final MenuItemMapper menuItemMapper;

    public List<MenuItemResponse> getAll() {
        var menu = menuItemRepo.findAllWithCategory();
        List<MenuItemResponse> response = new ArrayList<>();
        for (var item : menu) {
            var itemResponse = menuItemMapper.toMenuItemResponse(item);
            response.add(itemResponse);
        }

        return response;
    }
}
