package com.big.code.Backend.repository;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class configSecurity {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(authorize -> authorize
                        // ESTA LINHA É ESSENCIAL: Permite POST na rota /users
                        .requestMatchers(HttpMethod.POST, "/users").permitAll()

                        // Exige autenticação para o resto
                        .anyRequest().authenticated()
                )
                .httpBasic(Customizer.withDefaults()); // Mantém Basic Auth para rotas protegidas

        return http.build();
    }
}