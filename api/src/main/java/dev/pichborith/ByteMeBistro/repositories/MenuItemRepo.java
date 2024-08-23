package dev.pichborith.ByteMeBistro.repositories;

import dev.pichborith.ByteMeBistro.models.MenuItem.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MenuItemRepo extends JpaRepository<MenuItem, Integer> {

    @Query("FROM MenuItem m JOIN FETCH m.category")
    List<MenuItem> findAllWithCategory();
}
