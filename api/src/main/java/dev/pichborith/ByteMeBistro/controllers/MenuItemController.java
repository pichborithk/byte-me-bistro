package dev.pichborith.ByteMeBistro.controllers;

import dev.pichborith.ByteMeBistro.models.MenuItem.MenuItemResponse;
import dev.pichborith.ByteMeBistro.models.ResponseFrom;
import dev.pichborith.ByteMeBistro.services.MenuItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/menu")
public class MenuItemController {

    @Autowired
    private MenuItemService menuItemService;

    @GetMapping
    public ResponseEntity<ResponseFrom<List<MenuItemResponse>>> getMenu() {
        var items = menuItemService.getAll();
        var response = new ResponseFrom<List<MenuItemResponse>>(
            "Get all items in Menu successful", items);
        return ResponseEntity.ok(response);
    }
}
