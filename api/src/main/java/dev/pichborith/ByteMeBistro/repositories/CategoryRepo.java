package dev.pichborith.ByteMeBistro.repositories;

import dev.pichborith.ByteMeBistro.models.Item.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepo extends JpaRepository<Category, Integer> {
}
