package dev.pichborith.ByteMeBistro.controllers;

import dev.pichborith.ByteMeBistro.models.MenuItem.ItemResponse;
import dev.pichborith.ByteMeBistro.models.ResponseFrom;
import dev.pichborith.ByteMeBistro.services.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/items")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping
    public ResponseEntity<ResponseFrom<List<ItemResponse>>> getMenu() {
        var items = itemService.getAll();
        var response = new ResponseFrom<List<ItemResponse>>(
            "Get all items in Menu successful", items);
        return ResponseEntity.ok(response);
    }
}
