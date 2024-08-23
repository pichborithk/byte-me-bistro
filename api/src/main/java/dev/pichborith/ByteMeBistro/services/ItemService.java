package dev.pichborith.ByteMeBistro.services;

import dev.pichborith.ByteMeBistro.models.MenuItem.ItemResponse;
import dev.pichborith.ByteMeBistro.repositories.ItemRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ItemService {

    private final ItemRepo itemRepo;
    private final ItemMapper itemMapper;

    public List<ItemResponse> getAll() {
        var items = itemRepo.findAllWithCategory();
        List<ItemResponse> response = new ArrayList<>();
        for (var item : items) {
            var itemResponse = itemMapper.toItemResponse(item);
            response.add(itemResponse);
        }

        return response;
    }
}
