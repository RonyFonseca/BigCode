package com.big.code.Backend.controller;

import com.big.code.Backend.model.User;
import com.big.code.Backend.repository.UserRepository;
import com.big.code.Backend.services.JWT;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserRepository repository;
    private final JWT jwt;

    public UserController(UserRepository repository,JWT jwt){
        this.repository = repository;
        this.jwt = jwt;
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
        String token = jwt.generateToken(user.getEmail());
        return ResponseEntity.status(200).body("Usuário cadastrado com sucesso token: "+ token);
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

        return ResponseEntity.status(200).body("Logado! "+jwt.generateToken(usuarioDoBanco.getEmail()));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUserById(@PathVariable Long id, @RequestHeader String token){
        token = token.split("Bearer ")[1];

        if(jwt.validateToken(token)){
            return ResponseEntity.status(400).body("Token inválido");
        }

        User userToken = repository.findByEmail(jwt.extractEmail(token));

        Optional<User> usuarioDoBanco = repository.findById(id);

        if(usuarioDoBanco.orElse(null) != userToken){
            return ResponseEntity.status(400).body("Você não pode deletar uma conta que não é sua");
        }
        repository.deleteById(userToken.getId());
        return ResponseEntity.status(200).body("Usuário deletado !");

    }

}
