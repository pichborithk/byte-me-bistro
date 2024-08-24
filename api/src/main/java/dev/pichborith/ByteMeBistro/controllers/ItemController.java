package dev.pichborith.ByteMeBistro.controllers;

import dev.pichborith.ByteMeBistro.models.Item.ItemResponse;
import dev.pichborith.ByteMeBistro.models.ResponseForm;
import dev.pichborith.ByteMeBistro.services.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/items")
@CrossOrigin(origins = "${CLIENT_URL}")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping
    public ResponseEntity<ResponseForm<List<ItemResponse>>> getMenu() {
        var items = itemService.getAll();
        var response = new ResponseForm<List<ItemResponse>>(
            "Get all items in Menu successful", items);
        return ResponseEntity.ok(response);
    }
}
