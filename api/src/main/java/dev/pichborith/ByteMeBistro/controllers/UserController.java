package dev.pichborith.ByteMeBistro.controllers;

import dev.pichborith.ByteMeBistro.models.ResponseForm;
import dev.pichborith.ByteMeBistro.models.user.UserResponse;
import dev.pichborith.ByteMeBistro.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "${CLIENT_URL}")
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    public ResponseEntity<ResponseForm<UserResponse>> getUser() {
        var user = userService.getCurrentUserDetails();
        var response = new ResponseForm<>("Get all user information successful",
                                          user);

        return ResponseEntity.ok(response);
    }
}
