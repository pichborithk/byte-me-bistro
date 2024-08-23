package dev.pichborith.ByteMeBistro.repositories;

import dev.pichborith.ByteMeBistro.models.MenuItem.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ItemRepo extends JpaRepository<Item, Integer> {

    @Query("FROM Item i JOIN FETCH i.category")
    List<Item> findAllWithCategory();
}
