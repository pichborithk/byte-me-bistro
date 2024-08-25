package dev.pichborith.ByteMeBistro.controllers;

import dev.pichborith.ByteMeBistro.models.ResponseForm;
import dev.pichborith.ByteMeBistro.models.user.AuthResponse;
import dev.pichborith.ByteMeBistro.models.user.User;
import dev.pichborith.ByteMeBistro.models.user.UserRequest;
import dev.pichborith.ByteMeBistro.services.JwtService;
import dev.pichborith.ByteMeBistro.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "${CLIENT_URL}")
@RequestMapping("/api")
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;
    private final JwtService jwtService;

    @PostMapping("/register")
    public ResponseEntity<ResponseForm<AuthResponse>> register(
        @RequestBody UserRequest request) {

        var user = userService.createUser(request);
        String token = jwtService.generateToken(user);

        var auth = new AuthResponse(token);
        var response = new ResponseForm<>("Register new user successful", auth);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<ResponseForm<AuthResponse>> login(
        @RequestBody UserRequest request) {
        User user = userService.getUser(request);
        String token = jwtService.generateToken(user);

        var auth = new AuthResponse(token);
        var response = new ResponseForm<>("Login successful", auth);

        return ResponseEntity.accepted().body(response);
    }

    @GetMapping("/hello")
    public String hello() {
        return "Hello Spring API";
    }
}