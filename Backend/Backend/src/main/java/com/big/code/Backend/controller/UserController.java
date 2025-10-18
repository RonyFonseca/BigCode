package com.big.code.Backend.controller;

import com.big.code.Backend.model.User;
import com.big.code.Backend.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserRepository repository;

    public UserController(UserRepository repository){
        this.repository = repository;
    }

    @PostMapping
    public ResponseEntity<?> createUser(@RequestBody User user){
        if(repository.existsByEmail(user.getEmail())) {
            return ResponseEntity.status(409).body("Este usuário já existe");
        }
        BCryptPasswordEncoder senhaHash = new BCryptPasswordEncoder();
        String novaSenha = senhaHash.encode(user.getSenha());
        user.setSenha(novaSenha);
        repository.save(user);
        return ResponseEntity.status(200).body("Usuário cadastrado com sucesso");
    }

    @GetMapping
    public ResponseEntity<?> getAllUsers(){
        return ResponseEntity.status(200).body(repository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id){
        return ResponseEntity.status(200).body(repository.findById(id));
    }

    @GetMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user){
        if(!(repository.existsByEmail(user.getEmail()))){
            return ResponseEntity.status(400).body("Usuário não encontrado!");
        }
        User usuarioDoBanco = repository.findByEmail(user.getEmail());

        BCryptPasswordEncoder senhaHash = new BCryptPasswordEncoder();
        if(!(senhaHash.matches(user.getSenha(), usuarioDoBanco.getSenha()))){
            return ResponseEntity.status(400).body("Senha incorreta!");
        }
        return ResponseEntity.status(200).body(usuarioDoBanco);
    }

}
