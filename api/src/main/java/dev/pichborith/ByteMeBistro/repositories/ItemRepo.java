package dev.pichborith.ByteMeBistro.repositories;

import dev.pichborith.ByteMeBistro.models.Item.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ItemRepo extends JpaRepository<Item, Integer> {

    // This is method for query items join with category if Fetch Type is Lazy
    @Query("FROM Item i JOIN FETCH i.category")
    List<Item> findAllWithCategory();
}
