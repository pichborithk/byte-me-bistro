package dev.pichborith.ByteMeBistro.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf(AbstractHttpConfigurer::disable)
            .authorizeHttpRequests(
                req -> req.anyRequest().permitAll()
            );
//            .sessionManagement(
//                session -> session.sessionCreationPolicy(STATELESS))
//            .exceptionHandling(
//                ex -> ex.authenticationEntryPoint(jwtAuthEntryPoint))
//            .addFilterBefore(jwtAuthFilter,
//                             UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
