package dev.pichborith.ByteMeBistro.services;

import dev.pichborith.ByteMeBistro.models.user.User;
import dev.pichborith.ByteMeBistro.models.user.UserRequest;
import dev.pichborith.ByteMeBistro.models.user.UserResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserMapper {

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User toUser(UserRequest request) {
        String password = passwordEncoder.encode(request.password());
        return new User(request.username(), password);
    }

    public UserResponse toUserResponse(User user) {
        return new UserResponse(user.getId(), user.getUsername(), user.getRole());
    }
}