package dev.pichborith.ByteMeBistro.repositories;

import dev.pichborith.ByteMeBistro.models.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Integer> {
}
